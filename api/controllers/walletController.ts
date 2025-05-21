import { WalletService } from "api/services/walletService";
import { Request, Response } from "express";

export class Wallet {
  static async test(req: Request, res: Response) {
    try {
      const { realIp } = req;
      const currentStatus = await WalletService.getStatus(realIp);
      if ("error" in currentStatus)
        res.status(400).json({ error: currentStatus.error });
      res.send(currentStatus);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
