// Réponses prédéfinies en 3 langues
const responses = {
  fr: {
    greeting: "Bonjour! Comment puis-je vous aider ?",
    services: "Nous offrons des solutions IA pour la gestion financière.",
    about: "Helvetic AI transforme les processus financiers grâce à l'IA.",
    contact: "Contactez-nous via notre formulaire sur le site."
  },
  en: {
    greeting: "Hello! How can I help?",
    services: "We provide AI solutions for financial management.",
    about: "Helvetic AI transforms financial processes using AI.",
    contact: "Contact us via our form on the site."
  },
  de: {
    greeting: "Hallo! Wie kann ich Ihnen helfen?",
    services: "Wir bieten KI-Lösungen für das Finanzmanagement.",
    about: "Helvetic AI transformiert Finanzprozesse mit KI.",
    contact: "Kontaktieren Sie uns über unser Formular auf der Website."
  }
};

let currentLang = localStorage.getItem("helveticai_lang") || "fr";

const botBtn = document.getElementById("bot-button");
const botWin = document.getElementById("bot-window");
const botForm = document.getElementById("bot-form");
const botInput = document.getElementById("bot-input");
const botMessages = document.getElementById("bot-messages");

if (botBtn && botWin) {
  botBtn.addEventListener("click", () => botWin.classList.toggle("hidden"));
}

if (botForm) {
  botForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = botInput.value.trim();
    if (!msg) return;
    botMessages.innerHTML += `<p><strong>Vous:</strong> ${msg}</p>`;

    let reply = responses[currentLang].greeting;
    if (msg.toLowerCase().includes("service")) reply = responses[currentLang].services;
    if (msg.toLowerCase().includes("about")) reply = responses[currentLang].about;
    if (msg.toLowerCase().includes("contact")) reply = responses[currentLang].contact;

    botMessages.innerHTML += `<p class="text-blue-700"><strong>Bot:</strong> ${reply}</p>`;
    botInput.value = "";
    botMessages.scrollTop = botMessages.scrollHeight;
  });
}
