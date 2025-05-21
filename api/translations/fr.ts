export const fr = {
  welcome_email: {
    subject: "Bienvenue chez ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro:
      "Merci de nous rejoindre sur ChainAfric — nous sommes ravis de t’avoir parmi nous.",
    description:
      "Notre mission est de rendre la crypto et la blockchain accessibles partout en Afrique — suis des portefeuilles, reste informé, et explore le Web3 dans ta langue préférée.",
    cta_button: "Commencer",
    footer:
      "Tu reçois cet e-mail parce que tu t’es inscrit sur ChainAfric. Construisons l’avenir ensemble ✨",
  },
  tx_notification: {
    subject: "📥 Nouvelle transaction détectée",
    title: "📥 Nouvelle transaction détectée",
    received_message: (address: string, amount: string, symbol: string) =>
      `Ton portefeuille ${address} vient de recevoir ${amount} ${symbol}.`,
    from_label: "De",
    tx_hash_label: "Hash Tx",
    cta_button: "Voir dans l'explorateur",
  },
  contract_alert: {
    subject: "⚙️ Activité de contrat intelligent",
    title: "⚙️ Activité de contrat intelligent",
    alert_message: (address: string) =>
      `Nous avons détecté une interaction avec un contrat intelligent depuis ton adresse ${address}.`,
    contract_label: "Contrat",
    method_label: "Méthode",
    tx_hash_label: "Hash Tx",
    cta_button: "Inspecter dans l'explorateur",
  },
};
