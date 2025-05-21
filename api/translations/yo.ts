export const yo = {
  welcome_email: {
    subject: "Kaabọ si ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro:
      "A dúpẹ́ pé o darapọ̀ mọ́ ChainAfric — a ni inudidun lati ni ọ lórí ọkọ wa.",
    description:
      "Ìpinnu wa ni láti jẹ́ kí crypto àti blockchain wúlò ní gbogbo Afirika — tọ̀pa wallets, gba ìkìlọ̀, àti ṣàwárí Web3 ní èdè tí o fẹ́.",
    cta_button: "Bẹrẹ",
    footer:
      "O ti gba imeeli yi nitori pe o forukọsilẹ ni ChainAfric. Jẹ́ ká kọ́ ọjọ́ iwájú pọ̀ ✨",
  },
  tx_notification: {
    subject: "📥 Ìfọwọ́ṣọ́ tuntun ti rí",
    title: "📥 Ìfọwọ́ṣọ́ tuntun ti rí",
    received_message: (address: string, amount: string, symbol: string) =>
      `Wallet rẹ ${address} ti gba ${amount} ${symbol}.`,
    from_label: "Láti",
    tx_hash_label: "Tx Hash",
    cta_button: "Wo lori Explorer",
  },
  contract_alert: {
    subject: "⚙️ Ìṣe Smart Contract",
    title: "⚙️ Ìṣe Smart Contract",
    alert_message: (address: string) =>
      `A ti rí ìbáṣepọ̀ pẹ̀lú smart contract láti adirẹsi rẹ ${address}.`,
    contract_label: "Adehun",
    method_label: "Ọna",
    tx_hash_label: "Tx Hash",
    cta_button: "Ṣàyẹ̀wò lori Explorer",
  },
};
