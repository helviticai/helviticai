// chatbot.js

// Langue par défaut
let currentLang = "fr";

// === Sélecteurs ===
const botBtn = document.getElementById("chatbot-toggle");
const botWin = document.getElementById("chatbot-window");
const botClose = document.getElementById("chatbot-close");
const botForm = document.getElementById("bot-form");
const botInput = document.getElementById("bot-input");
const botMessages = document.getElementById("chatbot-messages");

// === Ouvrir / fermer ===
botBtn.addEventListener("click", () => {
  botWin.classList.toggle("hidden");
  if (!botWin.classList.contains("hidden")) {
    showWelcomeMessage();
  }
});
botClose.addEventListener("click", () => botWin.classList.add("hidden"));

// === Messages ===
function addMessage(sender, text) {
  const div = document.createElement("div");
  div.className =
    sender === "bot"
      ? "message-bot px-3 py-2 rounded-lg"
      : "message-user px-3 py-2 rounded-lg text-right";
  div.innerHTML = `<strong>${sender === "bot" ? "Bot" : "Vous"}:</strong> ${text}`;
  botMessages.appendChild(div);
  botMessages.scrollTop = botMessages.scrollHeight;
}

// === Bienvenue ===
function showWelcomeMessage() {
  botMessages.innerHTML = "";
  addMessage("bot", faq[currentLang].q1); // Intro = Q1
}

// === Détection langue ===
function detectLanguage(msg) {
  if (/[äöüß]/i.test(msg) || msg.includes("hallo")) return "de";
  if (msg.includes("hello") || msg.includes("hi")) return "en";
  return "fr";
}

// === Détection question ===
function getAnswer(msg) {
  msg = msg.toLowerCase();

  // FR
  if (currentLang === "fr") {
    if (msg.includes("avantage") || msg.includes("bénéfice")) return faq.fr.q2;
    if (msg.includes("planification")) return faq.fr.q3;
    if (msg.includes("automatis")) return faq.fr.q4;
    if (msg.includes("prévision") || msg.includes("forecast")) return faq.fr.q5;
    if (msg.includes("risque")) return faq.fr.q6;
    if (msg.includes("intégr")) return faq.fr.q7;
    if (msg.includes("prérequis")) return faq.fr.q8;
    if (msg.includes("temps") || msg.includes("résultat")) return faq.fr.q9;
    if (msg.includes("technolog")) return faq.fr.q10;
    if (msg.includes("solution")) return faq.fr.q11;
    if (msg.includes("choisir")) return faq.fr.q12;
    if (msg.includes("roi")) return faq.fr.q13;
    if (msg.includes("mesurer") || msg.includes("kpi")) return faq.fr.q14;
    if (msg.includes("défi")) return faq.fr.q15;
    if (msg.includes("fiabil")) return faq.fr.q16;
    if (msg.includes("former")) return faq.fr.q17;
    if (msg.includes("remplac")) return faq.fr.q18;
    if (msg.includes("tendance")) return faq.fr.q19;
    if (msg.includes("avenir")) return faq.fr.q20;
  }

  // EN
  if (currentLang === "en") {
    if (msg.includes("benefit")) return faq.en.q2;
    if (msg.includes("planning")) return faq.en.q3;
    if (msg.includes("automate")) return faq.en.q4;
    if (msg.includes("forecast")) return faq.en.q5;
    if (msg.includes("risk")) return faq.en.q6;
    if (msg.includes("integrat")) return faq.en.q7;
    if (msg.includes("requirement")) return faq.en.q8;
    if (msg.includes("time")) return faq.en.q9;
    if (msg.includes("technolog")) return faq.en.q10;
    if (msg.includes("solution")) return faq.en.q11;
    if (msg.includes("choose")) return faq.en.q12;
    if (msg.includes("roi")) return faq.en.q13;
    if (msg.includes("measure") || msg.includes("kpi")) return faq.en.q14;
    if (msg.includes("challenge")) return faq.en.q15;
    if (msg.includes("reliab")) return faq.en.q16;
    if (msg.includes("train")) return faq.en.q17;
    if (msg.includes("replace")) return faq.en.q18;
    if (msg.includes("trend")) return faq.en.q19;
    if (msg.includes("future")) return faq.en.q20;
  }

  // DE
  if (currentLang === "de") {
    if (msg.includes("vorteil")) return faq.de.q2;
    if (msg.includes("planung")) return faq.de.q3;
    if (msg.includes("automatis")) return faq.de.q4;
    if (msg.includes("prognose")) return faq.de.q5;
    if (msg.includes("risiko")) return faq.de.q6;
    if (msg.includes("integrat")) return faq.de.q7;
    if (msg.includes("voraussetz")) return faq.de.q8;
    if (msg.includes("zeit")) return faq.de.q9;
    if (msg.includes("technolog")) return faq.de.q10;
    if (msg.includes("lösung")) return faq.de.q11;
    if (msg.includes("wählen")) return faq.de.q12;
    if (msg.includes("roi")) return faq.de.q13;
    if (msg.includes("kpi") || msg.includes("mess")) return faq.de.q14;
    if (msg.includes("herausforderung")) return faq.de.q15;
    if (msg.includes("zuverläss")) return faq.de.q16;
    if (msg.includes("schul")) return faq.de.q17;
    if (msg.includes("ersetz")) return faq.de.q18;
    if (msg.includes("trend")) return faq.de.q19;
    if (msg.includes("zukunft")) return faq.de.q20;
  }

  return faq[currentLang].q1; // défaut
}

// === Réception message ===
botForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = botInput.value.trim();
  if (!msg) return;

  addMessage("user", msg);

  // Détecter langue
  currentLang = detectLanguage(msg);

  // Répondre
  const reply = getAnswer(msg);
  addMessage("bot", reply);

  botInput.value = "";
});
