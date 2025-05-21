import { AddressList } from "aws-sdk/clients/ses";
import { ses } from "../utils/aws";
import { SES } from "aws-sdk";
import { generateTransactionEmail, generateWelcomeEmail } from "../emails";

interface SendMailParams {
  source: string;
  destination: {
    email?: string;
    emails?: [string] | null;
    uId?: string;
  };
  language: string;
  template: "welcome" | "transaction" | "contract";
  html: {
    data: any;
  };
}

export class Notifier {
  static async getStatus(ip) {
    if (!ip) return { error: "must provide identity" };
    const status = {
      code: 200,
      action: "/notifications running",
      msg: "success",
      ip,
      service: "chainafric-api",
      env: process.env.NODE_ENV,
      at: new Date(Date.now()).toLocaleString(),
    };
    console.log(status);
    return status;
  }

  static async sendEmail({
    source,
    destination,
    language,
    template,
    html,
  }: SendMailParams): Promise<boolean> {
    let htmlData;
    switch (template) {
      case "welcome":
        htmlData = generateWelcomeEmail({ user: html.data.name }, language);
        break;
      case "transaction":
        break;
      case "contract":
        break;

      default:
        break;
    }

    const params: SES.SendEmailRequest = {
      Source: source,
      Destination: {
        ToAddresses: destination.email
          ? [destination.email]
          : (destination.emails as AddressList),
      },
      Message: {
        Subject: {
          Data: htmlData.subject,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: htmlData.html,
            Charset: "UTF-8",
          },
        },
      },
    };

    try {
      const result = await ses.sendEmail(params).promise();
      console.log(`Email sent to ${destination.email}`, result);
      return true;
    } catch (err) {
      console.error("Error sending email:", err);
      return false;
    }
  }

  static async saveNotification() {}
}
