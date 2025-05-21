import { v4 } from "uuid";
import jwt from "jsonwebtoken";
import { BinaryLike, createHmac } from "crypto";

export class Utils {
  static uuidV4() {
    return v4();
  }

  static generateJWT(tag, secret) {
    return jwt.sign({ tag, issued_at: Date.now() }, secret, {
      expiresIn: "1h",
    });
  }

  static verifyJWT(token, secret) {
    return jwt.verify(token, secret);
  }

  static validatePhone(phone) {
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (re.test(phone)) return true;
  }

  static validateEmail(email) {
    let re = /\S+@\S+\.\S+/;

    if (!re.test(email)) return false;
    if (email.substring(email.length - 11, email.length) === "detectu.com")
      return false;

    return true;
  }

  static verifyHmacMessage(message, hash) {
    if (!message) return { error: "must provide message" };
    if (!hash) return { error: "must provide hash" };

    const derivedHash = createHmac(
      "sha512",
      process.env.HMACSECRET as unknown as BinaryLike
    )
      .update(JSON.stringify(message))
      .digest("base64");

    if (derivedHash != hash) return false;
    return true;
  }
}
