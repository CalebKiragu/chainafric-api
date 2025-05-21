export const zu = {
  welcome_email: {
    subject: "Siyakwamukela ku ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro:
      "Siyabonga ngokuzijoyina ku ChainAfric — siyajabula ukukubona lapha.",
    description:
      "Inhloso yethu ukwenza i-crypto ne-blockchain kufinyeleleke e-Afrika yonke — landela ama-wallets, thola izaziso, futhi uhlole i-Web3 ngolimi olukhethile.",
    cta_button: "Qala",
    footer:
      "Uthola le imeyili ngoba ubhalisele ku ChainAfric. Ake sakhe ikusasa ndawonye ✨",
  },
  tx_notification: {
    subject: "📥 Ukuthengiselana Okusha Kutholakele",
    title: "📥 Ukuthengiselana Okusha Kutholakele",
    received_message: (address: string, amount: string, symbol: string) =>
      `I-wallet yakho ${address} isanda ukuthola ${amount} ${symbol}.`,
    from_label: "Kusuka",
    tx_hash_label: "Tx Hash",
    cta_button: "Buka ku Explorer",
  },
  contract_alert: {
    subject: "⚙️ Umsebenzi we Smart Contract",
    title: "⚙️ Umsebenzi we Smart Contract",
    alert_message: (address: string) =>
      `Sithole ukuxhumana ne smart contract kusuka ekhelini lakho ${address}.`,
    contract_label: "Inkontileka",
    method_label: "Indlela",
    tx_hash_label: "Tx Hash",
    cta_button: "Hlola ku Explorer",
  },
};
