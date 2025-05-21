// import api from "../api";
import serverless from "serverless-http";
import { sequelizeInit } from "../models";
import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import { Sequelize } from "sequelize";
import { Application } from "express";

let sequelize: Sequelize | undefined;

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log("chainafric-api started");
  // initialize sequelize if not connected
  sequelize = await sequelizeInit();
  sequelize.connectionManager.initPools();
  // Restore getConnection if previously deleted by .close()
  if ((sequelize.connectionManager as any).hasOwnProperty("getConnection")) {
    delete (sequelize.connectionManager as any).getConnection;
  }
  const response = await serverless(undefined as unknown as Application)(
    event,
    context
  );
  //   const response = await serverless(api)(event, context);
  return response as APIGatewayProxyResult;
};
