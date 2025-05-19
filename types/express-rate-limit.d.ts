declare module "express-rate-limit" {
  import { RequestHandler } from "express";

  interface RateLimitOptions {
    windowMs?: number;
    max?: number | ((req: any, res: any) => number);
    message?: string | object;
    statusCode?: number;
    headers?: boolean;
    keyGenerator?: (req: any) => string;
    handler?: (req: any, res: any, next: any) => void;
    onLimitReached?: (
      req: any,
      res: any,
      optionsUsed: RateLimitOptions
    ) => void;
    skip?: (req: any, res: any) => boolean;
    // add more as needed
  }

  function rateLimit(options?: RateLimitOptions): RequestHandler;

  export = rateLimit;
}
