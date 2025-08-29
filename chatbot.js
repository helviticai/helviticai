// ================== Réponses prédéfinies ==================
const responses = {
  fr: {
    greeting: "Bonjour! Comment puis-je vous aider ?",
    q1: { keywords: ["service","services"], answer: "Nous offrons des solutions IA pour la gestion financière." },
    q2: { keywords: ["about","qui êtes-vous","helvetic"], answer: "Helvetic AI transforme les processus financiers grâce à l'IA." },
    q3: { keywords: ["contact","email"], answer: "Contactez-nous via notre formulaire sur le site." },
    q4: { keywords: ["prix","tarif","coût"], answer: "Nos prix sont adaptés selon vos besoins. Contactez-nous pour un devis." },
    q5: { keywords: ["demo","démonstration"], answer: "Nous proposons des démos personnalisées, réservez via le formulaire." },
    q6: { keywords: ["support","aide","assistance"], answer: "Notre support est disponible 24/7 pour nos clients." },
    q7: { keywords: ["formation","training"], answer: "Nous proposons des formations complètes pour vos équipes." },
    q8: { keywords: ["securite","sécurité"], answer: "La sécurité et la confidentialité sont au cœur de nos solutions." },
    q9: { keywords: ["integration","intégration"], answer: "Nos solutions s'intègrent facilement à vos systèmes existants." },
    q10: { keywords: ["paiement","facture"], answer: "Nous acceptons plusieurs modes de paiement : carte, virement, etc." },
    q11: { keywords: ["essai","trial"], answer: "Un essai gratuit est disponible sur demande." },
    q12: { keywords: ["cloud","hébergement"], answer: "Nos solutions sont hébergées dans un cloud sécurisé en Europe." },
    q13: { keywords: ["temps","délai","déploiement"], answer: "Le déploiement prend généralement entre 2 et 6 semaines." },
    q14: { keywords: ["ia","artificielle"], answer: "Nous utilisons des modèles IA de dernière génération." },
    q15: { keywords: ["mise a jour","update"], answer: "Nos solutions sont mises à jour régulièrement et automatiquement." },
    q16: { keywords: ["mobile","app"], answer: "Oui, nous proposons une version mobile pour iOS et Android." },
    q17: { keywords: ["partenaire","partenariat"], answer: "Nous collaborons avec plusieurs partenaires en Europe." },
    q18: { keywords: ["contrat","abonnement"], answer: "Nous proposons des abonnements flexibles sans engagement." },
    q19: { keywords: ["langue","anglais","allemand"], answer: "Nos solutions sont disponibles en français, anglais et allemand." },
    q20: { keywords: ["horaire","disponible"], answer: "Nous sommes disponibles du lundi au vendredi de 9h à 18h." },
    unknown: "Désolé, je n'ai pas compris. Pouvez-vous préciser ?"
  },

  en: {
    greeting: "Hello! How can I help?",
    q1: { keywords: ["service","services"], answer: "We provide AI solutions for financial management." },
    q2: { keywords: ["about","who are you","helvetic"], answer: "Helvetic AI transforms financial processes using AI." },
    q3: { keywords: ["contact","email"], answer: "Contact us via our form on the site." },
    q4: { keywords: ["price","cost","pricing"], answer: "Our prices are tailored to your needs. Contact us for a quote." },
    q5: { keywords: ["demo","demonstration"], answer: "We offer personalized demos, book via the form." },
    q6: { keywords: ["support","help","assistance"], answer: "Our support is available 24/7 for clients." },
    q7: { keywords: ["training","course"], answer: "We provide complete training programs for your teams." },
    q8: { keywords: ["security","safe"], answer: "Security and confidentiality are at the core of our solutions." },
    q9: { keywords: ["integration","connect"], answer: "Our solutions integrate easily with your existing systems." },
    q10: { keywords: ["payment","invoice"], answer: "We accept several payment methods: card, transfer, etc." },
    q11: { keywords: ["trial","test"], answer: "A free trial is available upon request." },
    q12: { keywords: ["cloud","hosting"], answer: "Our solutions are hosted in a secure European cloud." },
    q13: { keywords: ["time","delay","deployment"], answer: "Deployment usually takes 2 to 6 weeks." },
    q14: { keywords: ["ai","artificial"], answer: "We use state-of-the-art AI models." },
    q15: { keywords: ["update","upgrade"], answer: "Our solutions are updated regularly and automatically." },
    q16: { keywords: ["mobile","app"], answer: "Yes, we provide a mobile version for iOS and Android." },
    q17: { keywords: ["partner","partnership"], answer: "We collaborate with several partners across Europe." },
    q18: { keywords: ["contract","subscription"], answer: "We offer flexible subscriptions without commitment." },
    q19: { keywords: ["language","english","german","french"], answer: "Our solutions are available in English, French and German." },
    q20: { keywords: ["hours","available","schedule"], answer: "We are available Monday to Friday, 9am to 6pm." },
    unknown: "Sorry, I didn't understand. Could you clarify?"
  },

  de: {
    greeting: "Hallo! Wie kann ich Ihnen helfen?",
    q1: { keywords: ["service","dienste"], answer: "Wir bieten KI-Lösungen für das Finanzmanagement." },
    q2: { keywords: ["about","wer sind sie","helvetic"], answer: "Helvetic AI transformiert Finanzprozesse mit KI." },
    q3: { keywords: ["kontakt","email"], answer: "Kontaktieren Sie uns über unser Formular auf der Website." },
    q4: { keywords: ["preis","kosten","tarif"], answer: "Unsere Preise sind auf Ihre Bedürfnisse zugeschnitten. Kontaktieren Sie uns für ein Angebot." },
    q5: { keywords: ["demo","vorführung"], answer: "Wir bieten personalisierte Demos an, buchen Sie über das Formular." },
    q6: { keywords: ["support","hilfe","assistenz"], answer: "Unser Support ist rund um die Uhr für Kunden verfügbar." },
    q7: { keywords: ["training","schulung"], answer: "Wir bieten umfassende Schulungen für Ihre Teams an." },
    q8: { keywords: ["sicherheit","secure"], answer: "Sicherheit und Vertraulichkeit stehen im Mittelpunkt unserer Lösungen." },
    q9: { keywords: ["integration","anbindung"], answer: "Unsere Lösungen lassen sich leicht in Ihre Systeme integrieren." },
    q10: { keywords: ["zahlung","rechnung"], answer: "Wir akzeptieren mehrere Zahlungsmethoden: Karte, Überweisung usw." },
    q11: { keywords: ["test","probe"], answer: "Eine kostenlose Testversion ist auf Anfrage verfügbar." },
    q12: { keywords: ["cloud","hosting"], answer: "Unsere Lösungen werden in einer sicheren europäischen Cloud gehostet." },
    q13: { keywords: ["zeit","dauer","bereitstellung"], answer: "Die Bereitstellung dauert in der Regel zwischen 2 und 6 Wochen." },
    q14: { keywords: ["ki","künstlich"], answer: "Wir nutzen modernste KI-Modelle." },
    q15: { keywords: ["update","aktualisierung"], answer: "Unsere Lösungen werden regelmäßig und automatisch aktualisiert." },
    q16: { keywords: ["mobil","app"], answer: "Ja, wir bieten eine mobile Version für iOS und Android." },
    q17: { keywords: ["partner","partnerschaft"], answer: "Wir arbeiten mit mehreren Partnern in Europa zusammen." },
    q18: { keywords: ["vertrag","abo"], answer: "Wir bieten flexible Abonnements ohne Verpflichtung an." },
    q19: { keywords: ["sprache","englisch","französisch","deutsch"], answer: "Unsere Lösungen sind auf Deutsch, Englisch und Französisch verfügbar." },
    q20: { keywords: ["zeiten","öffnungszeiten"], answer: "Wir sind Montag bis Freitag von 9 bis 18 Uhr verfügbar." },
    unknown: "Entschuldigung, das habe ich nicht verstanden. Können Sie das präzisieren?"
  }
};

// ================== Langue courante ==================
let currentLang = localStorage.getItem("helveticai_lang") || "fr";

// ================== Éléments ==================
const botBtn = document.getElementById("bot-button");
const botWin = document.getElementById("bot-window");
const botClose = document.getElementById("bot-close");
const botForm = document.getElementById("bot-form");
const botInput = document.getElementById("bot-input");
const botMessages = document.getElementById("bot-messages");

// Ouvrir/fermer avec la boule 💬
if (botBtn && botWin) {
  botBtn.addEventListener("click", () => botWin.classList.toggle("hidden"));
}

// Fermer avec le X
if (botClose && botWin) {
  botClose.addEventListener("click", () => botWin.classList.add("hidden"));
}

// Gestion messages
if (botForm) {
  botForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = botInput.value.trim().toLowerCase();
    if (!msg) return;

    // Message utilisateur
    botMessages.innerHTML += `<p class="user-msg"><strong>Vous:</strong> ${msg}</p>`;

    // Réponse du bot
    let reply = responses[currentLang].unknown;
    for (let key in responses[currentLang]) {
      if (responses[currentLang][key].keywords) {
        if (responses[currentLang][key].keywords.some(kw => msg.includes(kw))) {
          reply = responses[currentLang][key].answer;
          break;
        }
      }
    }

    botMessages.innerHTML += `<p class="bot-msg"><strong>Bot:</strong> ${reply}</p>`;

    // Scroll bas
    botInput.value = "";
    botMessages.scrollTop = botMessages.scrollHeight;
  });
}
