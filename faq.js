// ✅ Messages de bienvenue multilingues
const translations = {
  fr: {
    welcome: "Bienvenue sur Helvetic AI 🤖🇨🇭 ! Nous aidons les directions financières à transformer leur performance grâce à l’IA et à l’EPM. Posez-moi vos questions sur l’IA, la planification, le reporting ou le ROI."
  },
  en: {
    welcome: "Welcome to Helvetic AI 🤖🇨🇭! We help finance teams transform performance with AI and EPM. Ask me about AI, planning, reporting or ROI."
  },
  de: {
    welcome: "Willkommen bei Helvetic AI 🤖🇨🇭! Wir unterstützen Finanzteams dabei, ihre Performance mit KI und EPM zu transformieren. Fragen Sie mich zu KI, Planung, Reporting oder ROI."
  },
  ch: {
    welcome: "Bienvenue chez Helvetic AI 🤖🇨🇭, la solution suisse qui combine IA et excellence financière. Posez vos questions sur la performance, l’EPM et l’innovation."
  }
};

// ✅ Base de connaissances
const faq = {
  fr: {
    "ia finance definition qu'est-ce": "L'IA appliquée à la performance financière utilise des algorithmes avancés, l'apprentissage automatique et l'analyse prédictive pour optimiser les processus de gestion dans l'EPM.",
    "avantages benefices ia epm finance": "Avantages : automatisation (30-50% de gain de temps), prévisions plus précises (+15-25%), détection d'anomalies, optimisation continue et réduction des erreurs humaines.",
    "planification budgeting forecasting ia": "L'IA améliore la planification grâce à des modèles prédictifs, simulation de scénarios et intégration automatique de données externes.",
    "roi retour investissement cout benefices": "ROI attendu avec l'IA : 200-400% sur 3 ans. Gains : +30-50% productivité, +15-25% précision, -20-35% coûts, -40-60% délais de clôture.",
    "contact aide support question": "Contactez-nous 📩 : helviticaich@gmail.com | ☎️ +41 22 123 45 67"
  },
  en: {
    "what ai finance definition": "AI in financial performance uses machine learning and predictive analytics to automate and optimize EPM processes.",
    "benefits advantages ai epm finance": "Benefits: process automation (30-50% faster), improved forecast accuracy (+15-25%), anomaly detection, and reduced human errors.",
    "planning budgeting forecasting ai": "AI enables predictive models, multi-scenario simulation, and automated budget generation.",
    "roi return investment": "Expected ROI: 200-400% in 3 years. +30-50% productivity, +15-25% accuracy, -20-35% costs, -40-60% closing time.",
    "contact help support": "Contact us 📩: helviticaich@gmail.com | ☎️ +41 22 123 45 67"
  },
  de: {
    "was ist ki finanzen definition": "KI nutzt maschinelles Lernen und prädiktive Analytik zur Automatisierung und Optimierung von EPM-Prozessen.",
    "vorteile nutzen ki epm finanzen": "Vorteile: Automatisierung (30-50% schneller), genauere Prognosen (+15-25%), Anomalieerkennung und weniger menschliche Fehler.",
    "planung budgetierung prognosen ki": "KI ermöglicht prädiktive Modelle, Multi-Szenario-Simulation und automatische Budgetierung.",
    "roi rendite investition": "Erwarteter ROI: 200-400% in 3 Jahren. +30-50% Produktivität, +15-25% Genauigkeit, -20-35% Kosten, -40-60% Abschlusszeiten.",
    "kontakt hilfe support frage": "Kontakt 📩: helviticaich@gmail.com | ☎️ +41 22 123 45 67"
  }
};

// ✅ Questions rapides
const quickQuestions = {
  fr: [
    "Qu'est-ce que l'IA en finance ?",
    "Quels sont les avantages de l'IA pour l'EPM ?",
    "Comment intégrer l'IA dans mon système ?",
    "Quel est le ROI de l'IA en finance ?"
  ],
  en: [
    "What is AI in finance?",
    "What are the benefits of AI for EPM?",
    "How to integrate AI in my system?",
    "What is the ROI of AI in finance?"
  ],
  de: [
    "Was ist KI im Finanzwesen?",
    "Was sind die Vorteile von KI für EPM?",
    "Wie integriere ich KI in mein System?",
    "Was ist der ROI von KI im Finanzwesen?"
  ]
};

// ✅ Fonction de recherche de réponse
function getAnswer(question, lang = "fr") {
  const base = faq[lang];
  if (!base) return null;

  const q = question.toLowerCase();
  for (const key in base) {
    if (q.includes(key.split(" ")[0])) {
      return base[key];
    }
  }
  return null;
}
