export const tn = {
  welcome_email: {
    subject: "O Amogetswe mo ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro:
      "Re a leboga go bo o ikopantse le ChainAfric — re itumetse thata go nna le wena.",
    description:
      "Maikaelelo a rona ke go dira gore crypto le blockchain di nne motlhofo mo Afrika — sala wallets morago, amogela ditsebiso, o leke Web3 ka puo e o e ratang.",
    cta_button: "Simolola",
    footer:
      "O amogetse imeile eno ka gonne o ngodile mo ChainAfric. A re age bokamoso mmogo ✨",
  },
  tx_notification: {
    subject: "📥 Kgwebo e Ntšha e Lemogilwe",
    title: "📥 Kgwebo e Ntšha e Lemogilwe",
    received_message: (address: string, amount: string, symbol: string) =>
      `Wallet ya gago ${address} e sa tswa go amogela ${amount} ${symbol}.`,
    from_label: "Go tswa",
    tx_hash_label: "Tx Hash",
    cta_button: "Bona mo Explorer",
  },
  contract_alert: {
    subject: "⚙️ Ketapele ya Smart Contract",
    title: "⚙️ Ketapele ya Smart Contract",
    alert_message: (address: string) =>
      `Re lemogile tirisano le smart contract e tswang mo atereseng ya gago ${address}.`,
    contract_label: "Konteraka",
    method_label: "Mokgwa",
    tx_hash_label: "Tx Hash",
    cta_button: "Batlisisa mo Explorer",
  },
};
