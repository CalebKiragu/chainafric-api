export const ig = {
  welcome_email: {
    subject: "Nnọọ na ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro: "Daalụ maka isonyere ChainAfric — anyị nwere obi ụtọ inwe gị.",
    description:
      "Ebumnuche anyị bụ ime ka crypto na blockchain dịrị ndị Afrịka mfe — soro wallets, nweta ọkwa, chọpụta Web3 n'asụsụ gị.",
    cta_button: "Malite",
    footer:
      "Ị natara email a n’ihi na ị debanyere aha na ChainAfric. Ka anyị wuo ọdịnihu ọnụ ✨",
  },
  tx_notification: {
    subject: "📥 A hụrụ azụmahịa ọhụrụ",
    title: "📥 A hụrụ azụmahịa ọhụrụ",
    received_message: (address: string, amount: string, symbol: string) =>
      `Wallet gị ${address} natara ${amount} ${symbol}.`,
    from_label: "Si",
    tx_hash_label: "Tx Hash",
    cta_button: "Lelee na Explorer",
  },
  contract_alert: {
    subject: "⚙️ Omume Smart Contract",
    title: "⚙️ Omume Smart Contract",
    alert_message: (address: string) =>
      `Anyị hụrụ mmekọrịta na smart contract sitere na adreesị gị ${address}.`,
    contract_label: "Nkwekọrịta",
    method_label: "Usoro",
    tx_hash_label: "Tx Hash",
    cta_button: "Nyochaa na Explorer",
  },
};
