import cors from "cors";
import rateLimit from "express-rate-limit";
import axios, { AxiosInstance } from "axios";
import { NextFunction, Request, Response } from "express";

// Extend Express Request to add custom fields
declare module "express-serve-static-core" {
  interface Request {
    realIp?: string;
    userAgent?: string;
    userId?: string;
  }
}

const corsMiddleware = cors({ preflightContinue: true, origin: true });

export async function corsConfig(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const origin = req?.headers?.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST,GET,DELETE,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

  corsMiddleware(req, res, next);
}

export const limiter = rateLimit({
  windowMs: 1000, // 5 requests per second
  max: 5,
});

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

export class AxiosProvider {
  private static instance: AxiosInstance;

  public static getInstance(): AxiosInstance {
    if (!AxiosProvider.instance) {
      AxiosProvider.instance = axios.create({
        baseURL: process.env.EXTERNAL_API_BASE_URL,
        timeout: 5000,
      });

      // Add interceptors
      AxiosProvider.instance.interceptors.request.use((config) => {
        // Inject dynamic headers here
        // config.headers["X-App-Source"] = "ChainAfric";
        // config.headers["X-Trace-Id"] = generateTraceId(); // custom util
        if (process.env.API_KEY) {
          config.headers["Authorization"] = `Bearer ${process.env.API_KEY}`;
        }

        return config;
      });

      AxiosProvider.instance.interceptors.response.use(
        (response) => response,
        (error) => {
          console.error("Axios Error:", error.response?.data || error.message);
          return Promise.reject(error);
        }
      );
    }

    return AxiosProvider.instance;
  }
}
