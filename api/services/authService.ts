import { Utils } from "../utils";
import { OAuth2Client } from "google-auth-library";
import { Transaction } from "sequelize";
import { Notifier } from "./notificationService";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

interface Wallet {
  address: string;
  subscribed: boolean;
}

interface ThirdParty {
  provider: string;
  id: string;
}

interface Preferences {
  theme: "light" | "dark" | "system";
}

interface Banned {
  by: string;
  at: string;
  reason: string;
}

interface User {
  uId: string;
  role: "user" | "admin";
  uName: string | null;
  fName: string | null;
  lName: string | null;
  email: string | null;
  phone: string | null;
  pin: string | null;
  wallets: Wallet[] | null;
  profileImg: string | null;
  birth: Date | null;
  signup: Date | null;
  gender: "M" | "F" | "not-provided";
  country: string | "KE";
  language: string | "en";
  thirdParty: ThirdParty | null;
  preferences: Preferences | null;
  banned: Banned | null;
}

export class AuthService {
  constructor(private models: any) {}

  static async getStatus(ip) {
    if (!ip) return { error: "must provide identity" };
    const status = {
      code: 200,
      action: "/auth running",
      msg: "success",
      ip,
      service: "chainafric-api",
      env: process.env.NODE_ENV,
      at: new Date(Date.now()).toLocaleString(),
    };
    console.log(status);
    return status;
  }

  async googleAuthenticate(token, country, language) {
    if (!token) return { error: "must provide token" };
    let transaction: Transaction | null = null,
      user: User | null;

    try {
      const sequelize = await this.models.sequelize();
      transaction = await sequelize.transaction();

      const ticket = await googleClient.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket?.getPayload();
      if (!payload) throw new Error("Invalid Google token");
      const { email, name, picture, sub, given_name, family_name } = payload;

      const isExist = await this.models.user.findOne({
        where: { email },
        raw: true,
      });

      // Check if user exists in the system. If true, proceed with login.
      // If false, proceed with sign up
      if (isExist) return isExist;

      // User did not exist, create and save then send notification
      user = {
        uId: Utils.uuidV4(),
        role: "user",
        uName: name as string,
        fName: given_name as string,
        lName: family_name as string,
        email: email as string,
        phone: "not-provided",
        pin: "not-provided",
        wallets: null,
        profileImg: picture as string,
        birth: new Date() as Date,
        signup: new Date() as Date,
        gender: "not-provided",
        country: country || "KE",
        language: language || "en",
        thirdParty: { provider: "google", id: sub },
        preferences: { theme: "dark" },
        banned: null,
      };

      await this.models.create(user, { transaction });

      await Notifier.sendEmail({
        source: "chainafric <chainafric@pesatoken.org>",
        destination: { email, uId: user.uId },
        template: "welcome",
        language: user.language,
        html: { data: { name: user.fName } },
      });

      if (transaction) await transaction.commit();

      return user;
    } catch (error) {
      console.error("Error in google auth:", error);
      if (transaction) await transaction.rollback();
      return { error: "Internal error occurred. Please contact support." };
    }
  }
}
