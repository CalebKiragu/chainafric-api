export const sw = {
  welcome_email: {
    subject: "Karibu ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro: "Asante kwa kujiunga na ChainAfric — tunafurahi kukuwa nasi.",
    description:
      "Tunalenga kufanya fedha fiche na blockchain kufikiwa kote Afrika — fatilia pochi, pata arifa, na chunguza Web3 kwa lugha yako upendayo.",
    cta_button: "Anza",
    footer:
      "Unapokea barua pepe hii kwa sababu ulijiandikisha ChainAfric. Tujenge mustakabali pamoja ✨",
  },
  tx_notification: {
    subject: "📥 Muamala Mpya Wabainika",
    title: "📥 Muamala Mpya Wabainika",
    received_message: (address: string, amount: string, symbol: string) =>
      `Pochi yako ${address} imepokea ${amount} ${symbol}.`,
    from_label: "Kutoka",
    tx_hash_label: "Tx Hash",
    cta_button: "Tazama kwenye Explorer",
  },
  contract_alert: {
    subject: "⚙️ Shughuli ya Mkataba Mahiri",
    title: "⚙️ Shughuli ya Mkataba Mahiri",
    alert_message: (address: string) =>
      `Tumeona mwingiliano na mkataba mahiri kutoka kwa anuani yako ${address}.`,
    contract_label: "Mkataba",
    method_label: "Mbinu",
    tx_hash_label: "Tx Hash",
    cta_button: "Chunguza kwenye Explorer",
  },
};
