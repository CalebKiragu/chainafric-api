import { SES } from "aws-sdk";

const AWS_CONFIG = {
  accessKeyId: process.env.AWSACCESSKEY as string,
  secretAccessKey: process.env.AWSSECRETKEY as string,
  region: "us-east-1",
};

if (!AWS_CONFIG.accessKeyId || !AWS_CONFIG.secretAccessKey) {
  throw new Error("Missing AWS credentials in environment variables");
}

export const ses = new SES(AWS_CONFIG);
