import { Request, Response, NextFunction } from "express";
import { default as axios, AxiosInstance } from "axios";
// import parser from "ua-parser-js";

interface TraceContext {
  realIp?: string;
  userAgent?: string;
}

// Extend Express Request to add custom fields
declare module "express-serve-static-core" {
  interface Request {
    realIp?: string;
    userAgent?: string;
    userId?: string;
  }
}

export async function getIp(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const ip =
    (req.headers["x-real-ip"] as string) ||
    (req.headers["x-forwarded-for"] as string) ||
    req.connection.remoteAddress ||
    "";

  const parsedIp = ip.split(",")[0].trim();
  const userAgent = req.headers["user-agent"] as string;

  req.realIp = parsedIp;
  req.userAgent = userAgent;
  next();
}

export function createAxiosClient(traceContext?: TraceContext): AxiosInstance {
  const api = axios.create();

  api.interceptors.request.use(
    (config) => {
      config.headers["x-real-ip"] = traceContext?.realIp;
      config.headers["x-forwarded-for"] = traceContext?.realIp;
      config.headers["x-origin-user-agent"] = traceContext?.userAgent;
      return config;
    },
    (error) => Promise.reject(error)
  );

  return api;
}
