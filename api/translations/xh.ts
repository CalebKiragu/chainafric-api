export const xh = {
  welcome_email: {
    subject: "Wamkelekile kwi ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro:
      "Siyabulela ngokuzibandakanya ne ChainAfric — siyavuya ukukubona apha.",
    description:
      "Injongo yethu kukwenza kube lula ukufikelela kwi crypto kunye ne blockchain kulo lonke elaseAfrika — landela ii-wallets, fumana izaziso, kwaye uphonononge iWeb3 ngolwimi olukhethileyo.",
    cta_button: "Qalisa",
    footer:
      "Ufumana le imeyile kuba ubhalisele kwi ChainAfric. Masakhe ikamva kunye ✨",
  },
  tx_notification: {
    subject: "📥 Intengiselwano Entsha Ifunyenwe",
    title: "📥 Intengiselwano Entsha Ifunyenwe",
    received_message: (address: string, amount: string, symbol: string) =>
      `I-wallet yakho ${address} ifumene ${amount} ${symbol}.`,
    from_label: "Ukusuka",
    tx_hash_label: "Tx Hash",
    cta_button: "Jonga kwi Explorer",
  },
  contract_alert: {
    subject: "⚙️ Umsebenzi we Smart Contract",
    title: "⚙️ Umsebenzi we Smart Contract",
    alert_message: (address: string) =>
      `Siye saqaphela unxibelelwano ne smart contract ukusuka kwidilesi yakho ${address}.`,
    contract_label: "Ikhontrakthi",
    method_label: "Indlela",
    tx_hash_label: "Tx Hash",
    cta_button: "Hlola kwi Explorer",
  },
};
