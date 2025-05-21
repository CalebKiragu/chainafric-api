import { ArticleService } from "../services/articleService";
import { Request, Response } from "express";

export class Articles {
  static async test(req: Request, res: Response) {
    try {
      const { realIp } = req;
      const currentStatus = await ArticleService.getStatus(realIp);
      if ("error" in currentStatus)
        res.status(400).json({ error: currentStatus.error });
      res.send(currentStatus);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
