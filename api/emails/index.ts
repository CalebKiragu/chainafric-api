import { translations } from "../translations";

const BASE_URL = `https://chainafric.pesatoken.org/`;
const LOGO_URL =
  "https://chainafric-assets.s3.us-east-1.amazonaws.com/chainafric-colored-transparent.png"; // Replace with your actual logo URL
const BASE_STYLE = `
  font-family: Arial, sans-serif;
  color: #ffffff;
  background-color: #302939;
  padding: 20px;
`;
const BUTTON_STYLE = `
  display: inline-block;
  background-color: #e99b9b;
  color: #302939;
  padding: 12px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
`;

export function generateWelcomeEmail(
  {
    user,
  }: {
    user: string;
  },
  lang: string = "en" // fallback to English
): { subject: string; html: string } {
  const t = translations[lang].welcome_email;

  return {
    subject: t.subject,
    html: `
    <div style="${BASE_STYLE}">     
        <div style="text-align:center; margin-bottom:30px;">
          <img src="${LOGO_URL}" alt="ChainAfric Logo" style="width:100px; height:auto;" />
        </div>
        <h2 style="color:#e99b9b; font-size:24px; text-align:center;">${t.greeting(user)}</h2>
        <p style="font-size:16px; line-height:1.6; text-align:center; margin:20px 0;">
          ${t.intro}
        </p>
        <p style="font-size:16px; line-height:1.6; text-align:center; margin:20px 0;">
          ${t.description}
        </p>
        <div style="text-align:center; margin:30px 0;">
          <a href="${BASE_URL}" 
             style="${BUTTON_STYLE}">
            ${t.cta_button}
          </a>
        </div>
        <p style="font-size:12px; color:#bbbbbb; text-align:center; margin-top:40px;">${t.footer}</p>
        <p style="margin-top: 30px; font-size: 12px; color: #bbbbbb;">How accurate was this translation?</p>      
    </div>
  `,
  };
}

export function generateTransactionEmail(
  {
    address,
    amount,
    symbol,
    from,
    txHash,
    explorerUrl,
  }: {
    address: string;
    amount: string;
    symbol: string;
    from: string;
    txHash: string;
    explorerUrl: string;
  },
  lang: string = "en"
): { subject: string; html: string } {
  const t = translations[lang].tx_notification;

  return {
    subject: t.subject,
    html: `
    <div style="${BASE_STYLE}">
      <img src="${LOGO_URL}" alt="ChainAfric Logo" style="width: 120px; margin-bottom: 20px;" />
      <h2 style="color: #e99b9b;">${t.title}</h2>
      <p>${t.received_message(address, amount, symbol)}</p>
      <p><strong>${t.from_label} </strong>${from}</p>
      <p><strong>${t.tx_hash_label} </strong><a style="color: #e99b9b;" href="${explorerUrl}" target="_blank">${txHash}</a></p>
      <a href="${explorerUrl}" style="${BUTTON_STYLE}" target="_blank">${t.cta_button}</a>
      <p style="margin-top: 30px; font-size: 12px; color: #bbbbbb;">
        How accurate was this translation?
      </p>
      <p style="margin-top: 30px; font-size: 10px; color: #bbbbbb;">
        You received this email because you subscribed to transaction alerts on ChainAfric.
      </p>
    </div>
  `,
  };
}

export function generateContractEmail(
  {
    address,
    contract,
    method,
    txHash,
    explorerUrl,
  }: {
    address: string;
    contract: string;
    method: string;
    txHash: string;
    explorerUrl: string;
  },
  lang: string = "en"
): { subject: string; html: string } {
  const t = translations[lang].contract_alert;

  return {
    subject: t.subject,
    html: `
    <div style="${BASE_STYLE}">
      <img src="${LOGO_URL}" alt="ChainAfric Logo" style="width: 120px; margin-bottom: 20px;" />
      <h2 style="color: #e99b9b;">${t.title}</h2>
      <p>${t.alert_message(address)}</p>
      <p><strong>${t.contract_label}</strong> ${contract}</p>
      <p><strong>${t.method_label}</strong> ${method}</p>
      <p><strong>${t.tx_hash_label}</strong> <a style="color: #e99b9b;" href="${explorerUrl}" target="_blank">${txHash}</a></p>
      <a href="${explorerUrl}" style="${BUTTON_STYLE}" target="_blank">${t.cta_button}</a>
      <p style="margin-top: 30px; font-size: 12px; color: #bbbbbb;">
        How accurate was this translation?
      </p>
      <p style="margin-top: 30px; font-size: 10px; color: #bbbbbb;">
        You received this email because you subscribed to transaction alerts on ChainAfric.
      </p>
    </div>
  `,
  };
}
