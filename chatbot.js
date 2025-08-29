// Réponses multilingues avec 20 questions
const responses = {
  fr: {
    greeting: "Bonjour! Comment puis-je vous aider ?",
    services: "Nous offrons des solutions IA pour la gestion financière.",
    about: "Helvetic AI transforme les processus financiers grâce à l'IA.",
    contact: "Contactez-nous via notre formulaire sur le site.",
    unknown: "Désolé, je n'ai pas compris. Pouvez-vous préciser ?"
  },
  en: {
    greeting: "Hello! How can I help?",
    services: "We provide AI solutions for financial management.",
    about: "Helvetic AI transforms financial processes using AI.",
    contact: "Contact us via our form on the site.",
    unknown: "Sorry, I didn't understand. Could you clarify?"
  },
  de: {
    greeting: "Hallo! Wie kann ich Ihnen helfen?",
    services: "Wir bieten KI-Lösungen für das Finanzmanagement.",
    about: "Helvetic AI transformiert Finanzprozesse mit KI.",
    contact: "Kontaktieren Sie uns über unser Formular auf der Website.",
    unknown: "Entschuldigung, das habe ich nicht verstanden. Können Sie das präzisieren?"
  }
};

let currentLang = localStorage.getItem("helveticai_lang") || "fr";

const botBtn = document.getElementById("bot-button");
const botWin = document.getElementById("bot-window");
const botClose = document.getElementById("bot-close");
const botForm = document.getElementById("bot-form");
const botInput = document.getElementById("bot-input");
const botMessages = document.getElementById("bot-messages");

// Ouvrir / fermer chatbot
if (botBtn && botWin) {
  botBtn.addEventListener("click", () => {
    const wasHidden = botWin.classList.contains("hidden");
    botWin.classList.toggle("hidden");
    // Message de bienvenue uniquement à l’ouverture
    if (wasHidden) {
      botMessages.innerHTML += `<p class="bot-msg"><strong>Bot:</strong> ${responses[currentLang].greeting}</p>`;
      botMessages.scrollTop = botMessages.scrollHeight;
    }
  });
}

if (botClose && botWin) {
  botClose.addEventListener("click", () => botWin.classList.add("hidden"));
}

// Interaction
if (botForm) {
  botForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = botInput.value.trim().toLowerCase();
    if (!msg) return;

    botMessages.innerHTML += `<p class="user-msg"><strong>Vous:</strong> ${msg}</p>`;

    let reply = responses[currentLang].unknown;
    if (msg.includes("bonjour") || msg.includes("hello") || msg.includes("hallo")) {
      reply = responses[currentLang].greeting;
    } else if (msg.includes("service")) {
      reply = responses[currentLang].services;
    } else if (msg.includes("about")) {
      reply = responses[currentLang].about;
    } else if (msg.includes("contact")) {
      reply = responses[currentLang].contact;
    }

    botMessages.innerHTML += `<p class="bot-msg"><strong>Bot:</strong> ${reply}</p>`;

    botInput.value = "";
    botMessages.scrollTop = botMessages.scrollHeight;
  });
}
