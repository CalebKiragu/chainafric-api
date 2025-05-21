export const en = {
  welcome_email: {
    subject: "Welcome to ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro:
      "Thanks for joining ChainAfric — we’re thrilled to have you on board.",
    description:
      "We're on a mission to make crypto and blockchain accessible across Africa — track wallets, stay notified, and explore Web3 in your preferred language.",
    cta_button: "Get Started",
    footer:
      "You’re receiving this email because you signed up at ChainAfric. Let’s build the future together ✨",
  },
  tx_notification: {
    subject: "📥 New Transaction Detected",
    title: "📥 New Transaction Detected",
    received_message: (address: string, amount: string, symbol: string) =>
      `Your wallet ${address} just received ${amount} ${symbol}.`,
    from_label: "From",
    tx_hash_label: "Tx Hash",
    cta_button: "View on Explorer",
  },
  contract_alert: {
    subject: "⚙️ Smart Contract Activity",
    title: "⚙️ Smart Contract Activity",
    alert_message: (address: string) =>
      `We detected interaction with a smart contract from your address ${address}.`,
    contract_label: "Contract",
    method_label: "Method",
    tx_hash_label: "Tx Hash",
    cta_button: "Inspect on Explorer",
  },
};
