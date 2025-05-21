export const ha = {
  welcome_email: {
    subject: "Barka da zuwa ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro:
      "Mun gode da ka shiga ChainAfric — muna farin cikin kasancewarka tare da mu.",
    description:
      "Manufarmu ita ce kawo sauƙin amfani da crypto da blockchain a duk fadin Afirka — bi walat, karɓi sanarwa, ka gano Web3 cikin harshenka.",
    cta_button: "Fara",
    footer:
      "Ka karɓi wannan imel ne saboda ka yi rajista a ChainAfric. Mu gina gaba tare ✨",
  },
  tx_notification: {
    subject: "📥 An Gano Sabuwar Ma'amala",
    title: "📥 An Gano Sabuwar Ma'amala",
    received_message: (address: string, amount: string, symbol: string) =>
      `Walat ɗinka ${address} ta karɓi ${amount} ${symbol}.`,
    from_label: "Daga",
    tx_hash_label: "Tx Hash",
    cta_button: "Duba a Explorer",
  },
  contract_alert: {
    subject: "⚙️ Aikin Smart Contract",
    title: "⚙️ Aikin Smart Contract",
    alert_message: (address: string) =>
      `Mun lura da hulɗa da smart contract daga adireshinka ${address}.`,
    contract_label: "Kwantaragi",
    method_label: "Hanya",
    tx_hash_label: "Tx Hash",
    cta_button: "Dubawa a Explorer",
  },
};
