// === Réponses multilingues PRO avec ~20 questions ===
const responses = {
  fr: {
    greeting: "Bonjour! Comment puis-je vous aider ?",
    services: "Nous offrons des solutions IA pour la gestion financière, l’optimisation et la formation.",
    about: "Helvetic AI transforme les processus financiers grâce à l'IA.",
    contact: "Vous pouvez nous contacter via notre formulaire ou par email : helviticaich@gmail.com.",
    price: "Nos tarifs sont adaptés à vos besoins. Contactez-nous pour un devis personnalisé.",
    demo: "Oui ! Nous proposons des démonstrations de nos solutions IA.",
    team: "Notre équipe est composée de spécialistes en IA et finance.",
    location: "Nous sommes basés en Suisse, mais travaillons à l’international.",
    languages: "Nous parlons français, anglais et allemand.",
    support: "Notre support est disponible 7j/7 par email.",
    training: "Nous proposons des formations adaptées à vos équipes.",
    optimization: "Nous optimisons vos processus métiers avec l’automatisation.",
    consulting: "Nous offrons du conseil stratégique IA.",
    ai: "Nous développons des modèles d’IA sur mesure.",
    security: "Nous garantissons la sécurité et la confidentialité de vos données.",
    career: "Nous recrutons ! Envoyez-nous votre candidature.",
    vision: "Notre vision est de rendre l’IA accessible à toutes les entreprises.",
    mission: "Notre mission est d’améliorer la performance grâce à l’intelligence artificielle.",
    faq: "Vous pouvez poser des questions sur nos services, tarifs ou support.",
    goodbye: "Merci pour votre visite ! À bientôt 👋",
    unknown: "Désolé, je n'ai pas compris. Pouvez-vous préciser ?"
  },
  en: {
    greeting: "Hello! How can I help?",
    services: "We provide AI solutions for financial management, optimization, and training.",
    about: "Helvetic AI transforms financial processes using AI.",
    contact: "You can reach us via the form or email: helviticaich@gmail.com.",
    price: "Our pricing is tailored to your needs. Contact us for a custom quote.",
    demo: "Yes! We provide demonstrations of our AI solutions.",
    team: "Our team is made up of AI and finance specialists.",
    location: "We are based in Switzerland but work internationally.",
    languages: "We speak French, English, and German.",
    support: "Our support is available 7/7 via email.",
    training: "We provide training programs tailored to your teams.",
    optimization: "We optimize your business processes with automation.",
    consulting: "We provide AI strategic consulting.",
    ai: "We develop custom AI models.",
    security: "We ensure the security and confidentiality of your data.",
    career: "We are hiring! Send us your application.",
    vision: "Our vision is to make AI accessible to every company.",
    mission: "Our mission is to enhance performance through AI.",
    faq: "You can ask questions about our services, pricing, or support.",
    goodbye: "Thank you for visiting! See you soon 👋",
    unknown: "Sorry, I didn't understand. Could you clarify?"
  },
  de: {
    greeting: "Hallo! Wie kann ich Ihnen helfen?",
    services: "Wir bieten KI-Lösungen für Finanzmanagement, Optimierung und Schulungen.",
    about: "Helvetic AI transformiert Finanzprozesse mit KI.",
    contact: "Sie erreichen uns über das Formular oder per E-Mail: helviticaich@gmail.com.",
    price: "Unsere Preise sind maßgeschneidert. Kontaktieren Sie uns für ein Angebot.",
    demo: "Ja! Wir bieten Demos unserer KI-Lösungen an.",
    team: "Unser Team besteht aus Experten für KI und Finanzen.",
    location: "Wir sitzen in der Schweiz und arbeiten international.",
    languages: "Wir sprechen Französisch, Englisch und Deutsch.",
    support: "Unser Support ist 7/7 per E-Mail erreichbar.",
    training: "Wir bieten Schulungen für Ihre Teams an.",
    optimization: "Wir optimieren Ihre Geschäftsprozesse mit Automatisierung.",
    consulting: "Wir bieten strategische KI-Beratung an.",
    ai: "Wir entwickeln maßgeschneiderte KI-Modelle.",
    security: "Wir gewährleisten die Sicherheit und Vertraulichkeit Ihrer Daten.",
    career: "Wir stellen ein! Senden Sie uns Ihre Bewerbung.",
    vision: "Unsere Vision ist es, KI für jedes Unternehmen zugänglich zu machen.",
    mission: "Unsere Mission ist es, Leistung durch KI zu steigern.",
    faq: "Sie können Fragen zu unseren Dienstleistungen, Preisen oder Support stellen.",
    goodbye: "Danke für Ihren Besuch! Bis bald 👋",
    unknown: "Entschuldigung, das habe ich nicht verstanden. Können Sie das bitte präzisieren?"
  }
};

let currentLang = localStorage.getItem("helveticai_lang") || "fr";

// Sélecteurs
const botBtn = document.getElementById("bot-button");
const botWin = document.getElementById("bot-window");
const botClose = document.getElementById("bot-close");
const botForm = document.getElementById("bot-form");
const botInput = document.getElementById("bot-input");
const botMessages = document.getElementById("bot-messages");

// Ouvrir / fermer chatbot
if (botBtn && botWin) {
  botBtn.addEventListener("click", () => botWin.classList.toggle("hidden"));
}
if (botClose && botWin) {
  botClose.addEventListener("click", () => botWin.classList.add("hidden"));
}

// Fonction d'affichage message
function addMessage(sender, text) {
  const p = document.createElement("p");
  p.classList.add(sender === "bot" ? "bot-msg" : "user-msg");
  p.innerHTML = `<strong>${sender === "bot" ? "Bot" : "Vous"}:</strong> ${text}`;
  botMessages.appendChild(p);
  botMessages.scrollTop = botMessages.scrollHeight;
}

// Gestion des réponses
if (botForm) {
  botForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = botInput.value.trim().toLowerCase();
    if (!msg) return;
    addMessage("user", msg);
    botInput.value = "";

    let reply = responses[currentLang].unknown;

    if (msg.includes("bonjour") || msg.includes("hello") || msg.includes("hallo")) reply = responses[currentLang].greeting;
    else if (msg.includes("service")) reply = responses[currentLang].services;
    else if (msg.includes("about")) reply = responses[currentLang].about;
    else if (msg.includes("contact")) reply = responses[currentLang].contact;
    else if (msg.includes("prix") || msg.includes("price") || msg.includes("tarif")) reply = responses[currentLang].price;
    else if (msg.includes("demo")) reply = responses[currentLang].demo;
    else if (msg.includes("team") || msg.includes("équipe")) reply = responses[currentLang].team;
    else if (msg.includes("location") || msg.includes("où") || msg.includes("based")) reply = responses[currentLang].location;
    else if (msg.includes("language") || msg.includes("langue")) reply = responses[currentLang].languages;
    else if (msg.includes("support")) reply = responses[currentLang].support;
    else if (msg.includes("training") || msg.includes("formation")) reply = responses[currentLang].training;
    else if (msg.includes("optimisation") || msg.includes("optimization")) reply = responses[currentLang].optimization;
    else if (msg.includes("consulting") || msg.includes("conseil")) reply = responses[currentLang].consulting;
    else if (msg.includes("ai") || msg.includes("intelligence artificielle")) reply = responses[currentLang].ai;
    else if (msg.includes("sécurité") || msg.includes("security")) reply = responses[currentLang].security;
    else if (msg.includes("career") || msg.includes("emploi") || msg.includes("job")) reply = responses[currentLang].career;
    else if (msg.includes("vision")) reply = responses[currentLang].vision;
    else if (msg.includes("mission")) reply = responses[currentLang].mission;
    else if (msg.includes("faq") || msg.includes("questions")) reply = responses[currentLang].faq;
    else if (msg.includes("bye") || msg.includes("au revoir") || msg.includes("tschüss")) reply = responses[currentLang].goodbye;

    addMessage("bot", reply);
  });
}
