import { models } from "../../models";
import { AuthService } from "../services/authService";
import { Request, Response } from "express";

export class Auth {
  static async test(req: Request, res: Response) {
    try {
      const { realIp } = req;
      const currentStatus = await AuthService.getStatus(realIp);
      if ("error" in currentStatus)
        res.status(400).json({ error: currentStatus.error });
      res.send(currentStatus);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async googleAuth(req: Request, res: Response) {
    try {
      const { token, country, language } = req.body;
      const db = await models();
      const authenticator = new AuthService(db);
      const authenticate = await authenticator.googleAuthenticate(
        token,
        country,
        language
      );
      if ("error" in authenticate)
        res.status(400).json({ error: authenticate.error });
      res.send(authenticate);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
