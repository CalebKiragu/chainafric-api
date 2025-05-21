// import { Request, Response, NextFunction } from "express";
// import { default as axios, AxiosInstance } from "axios";
// // import parser from "ua-parser-js";

// interface TraceContext {
//   realIp?: string;
//   userAgent?: string;
// }

// export function createAxiosClient(traceContext?: TraceContext): AxiosInstance {
//   const api = axios.create();

//   api.interceptors.request.use(
//     (config) => {
//       config.headers["x-real-ip"] = traceContext?.realIp;
//       config.headers["x-forwarded-for"] = traceContext?.realIp;
//       config.headers["x-origin-user-agent"] = traceContext?.userAgent;
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   return api;
// }
