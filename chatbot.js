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

// Éléments du bot
const botBtn = document.getElementById("bot-button");
const botWin = document.getElementById("bot-window");
const botForm = document.getElementById("bot-form");
const botInput = document.getElementById("bot-input");
const botMessages = document.getElementById("bot-messages");

// Ouverture/fermeture
if (botBtn && botWin) {
  botBtn.addEventListener("click", () => botWin.classList.toggle("hidden"));
}

// Soumission de message
if (botForm && botMessages && botInput) {
  botForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = botInput.value.trim();
    if (!msg) return;

    // Message utilisateur
    botMessages.innerHTML += `<p class="user-msg"><strong>Vous:</strong> ${msg}</p>`;

    // Réponse simple en fonction de mots-clés
    const m = msg.toLowerCase();
    let reply = responses[currentLang].greeting;
    if (m.includes("service") || m.includes("services")) reply = responses[currentLang].services;
    else if (m.includes("about") || m.includes("qui") || m.includes("about us")) reply = responses[currentLang].about;
    else if (m.includes("contact") || m.includes("email") || m.includes("mail")) reply = responses[currentLang].contact;

    botMessages.innerHTML += `<p class="bot-msg"><strong>Bot:</strong> ${reply}</p>`;
    botInput.value = "";
    botMessages.scrollTop = botMessages.scrollHeight;
  });
}

// Suivre les changements de langue (si l’utilisateur clique un drapeau)
window.addEventListener("storage", (e) => {
  if (e.key === "helveticai_lang") {
    currentLang = e.newValue || "fr";
  }
});
