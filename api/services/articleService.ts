export class ArticleService {
  static async getStatus(ip) {
    if (!ip) return { error: "must provide identity" };
    const status = {
      code: 200,
      action: "/articles running",
      msg: "success",
      ip,
      service: "chainafric-api",
      env: process.env.NODE_ENV,
      at: new Date(Date.now()).toLocaleString(),
    };
    console.log(status);
    return status;
  }
}
