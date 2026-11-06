/*
  NÓRD — CONFIGURAÇÃO
  Troque pelo WhatsApp oficial antes de publicar.
  Formato: DDI + DDD + número, somente dígitos. Ex.: 5514999999999
*/
const NORD_CONFIG = {
  whatsapp: "5514999999999",
  businessName: "NÓRD Barbearia"
};

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();

function whatsappLink(message) {
  return `https://wa.me/${NORD_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}
document.querySelector("#floatingBook").href = whatsappLink("Olá! Gostaria de reservar um horário na NÓRD Barbearia.");

document.querySelector("#bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    `Olá! Meu nome é ${data.get("nome")}.`,
    `Serviço: ${data.get("servico")}.`,
    data.get("dia") ? `Preferência de dia/período: ${data.get("dia")}.` : "",
    data.get("obs") ? `Observações: ${data.get("obs")}` : ""
  ].filter(Boolean).join("\n");

  if (NORD_CONFIG.whatsapp === "5514999999999") {
    alert("Este é um site demonstrativo. Configure o WhatsApp real no arquivo script.js antes de publicar.");
    return;
  }
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
});
