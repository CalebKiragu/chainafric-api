import { Notifier } from "api/services/notificationService";
// const { Notifier } = require("dist/api/services");

async function run() {
  const mailer = await Notifier.sendEmail({
    source: "chainafric <chainafric@pesatoken.org>",
    destination: {
      email: "calebdavidbusiness@gmail.com",
      uId: "6058b393-c4cf-4865-bb46-bb306035c685",
    },
    template: "welcome",
    language: "yo",
    html: { data: { name: "caleb" } },
  });
  console.log(mailer);
}

run();

// npx sequelize-cli db:create --env production
// npx tsx --require dotenv/config rough.ts
/**
 *
 * npx sequelize-cli model:generate --name User --attributes uId:string,role:string,uName:string,fName:string,lName:string,email:string,phone:string,pin:string,wallets:text,profileImg:string,birth:string,signup:string,gender:string,country:string,language:string,thirdParty:text,preferences:text,banned:text,updated:string

npx sequelize-cli model:generate --name Wallet --attributes wId:string,uId:string,chain:string,network:string,provider:string,dateAdded:string,address:string,currency:string,subscribed:boolean,metadata:text
npx sequelize-cli model:generate --name Article --attributes aId:string,author:string,date:string,title:string,description:string,source:string,url:string,content:TEXT,language:string,translated:boolean,translations:text,timestamp:string,img:string,video:string,category:string,tags:string,original:boolean,metadata:text
npx sequelize-cli model:generate --name Notification --attributes nId:string,uId:string,type:string,action:string,channel:string,content:text,timestamp:string,delivered:boolean
npx sequelize-cli model:generate --name Log --attributes lId:string,uId:string,wId:string,aId:string,type:string,event:string,ip:string,detail:text,timestamp:string
*/
