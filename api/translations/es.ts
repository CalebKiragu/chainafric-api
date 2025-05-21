export const es = {
  welcome_email: {
    subject: "Bienvenido a ChainAfric",
    greeting: (name: string) => `gm ${name},`,
    intro:
      "Gracias por unirte a ChainAfric — estamos encantados de tenerte a bordo.",
    description:
      "Nuestra misión es hacer que las criptomonedas y la cadena de bloques sean accesibles en toda África — sigue carteras, recibe notificaciones y explora Web3 en tu idioma preferido.",
    cta_button: "Comenzar",
    footer:
      "Recibes este correo porque te registraste en ChainAfric. Construyamos el futuro juntos ✨",
  },
  tx_notification: {
    subject: "📥 Nueva transacción detectada",
    title: "📥 Nueva transacción detectada",
    received_message: (address: string, amount: string, symbol: string) =>
      `Tu cartera ${address} acaba de recibir ${amount} ${symbol}.`,
    from_label: "De",
    tx_hash_label: "Hash de Tx",
    cta_button: "Ver en el explorador",
  },
  contract_alert: {
    subject: "⚙️ Actividad de contrato inteligente",
    title: "⚙️ Actividad de contrato inteligente",
    alert_message: (address: string) =>
      `Detectamos una interacción con un contrato inteligente desde tu dirección ${address}.`,
    contract_label: "Contrato",
    method_label: "Método",
    tx_hash_label: "Hash de Tx",
    cta_button: "Inspeccionar en el explorador",
  },
};
