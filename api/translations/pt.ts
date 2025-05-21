export const pt = {
  welcome_email: {
    subject: "Bem-vindo ao ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro:
      "Obrigado por se juntar ao ChainAfric — estamos entusiasmados em tê-lo conosco.",
    description:
      "Nossa missão é tornar o uso de criptomoedas e blockchain acessível em toda a África — acompanhe carteiras, receba notificações e explore o Web3 no seu idioma preferido.",
    cta_button: "Começar",
    footer:
      "Você está recebendo este e-mail porque se cadastrou no ChainAfric. Vamos construir o futuro juntos ✨",
  },
  tx_notification: {
    subject: "📥 Nova Transação Detectada",
    title: "📥 Nova Transação Detectada",
    received_message: (address: string, amount: string, symbol: string) =>
      `Sua carteira ${address} acabou de receber ${amount} ${symbol}.`,
    from_label: "De",
    tx_hash_label: "Tx Hash",
    cta_button: "Ver no Explorer",
  },
  contract_alert: {
    subject: "⚙️ Atividade de Smart Contract",
    title: "⚙️ Atividade de Smart Contract",
    alert_message: (address: string) =>
      `Detectamos uma interação com um smart contract a partir do seu endereço ${address}.`,
    contract_label: "Contrato",
    method_label: "Método",
    tx_hash_label: "Tx Hash",
    cta_button: "Ver no Explorer",
  },
};
