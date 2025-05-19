// import api from "../api";
import serverless from "serverless-http";
import db from "../models";
import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import { Sequelize } from "sequelize";
import { Application } from "express";

let sqlz: Sequelize | undefined;

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log("API started");

  // Reuse sequelize instance across invocations
  if (!sqlz) {
    sqlz = await db.sequelize(); // make sure this returns an initialized Sequelize instance
  } else {
    sqlz.connectionManager.initPools();

    // Restore getConnection if previously deleted by .close()
    if ((sqlz.connectionManager as any).hasOwnProperty("getConnection")) {
      delete (sqlz.connectionManager as any).getConnection;
    }
  }

  const response = await serverless(undefined as unknown as Application)(
    event,
    context
  );
  //   const response = await serverless(api)(event, context);

  return response as APIGatewayProxyResult;
};
