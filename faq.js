// --- Base de connaissances IA & Finance EPM ---
const faq = {
  fr: {
    "ia finance definition qu'est-ce": "L'IA appliquée à la performance financière utilise des algorithmes avancés, l'apprentissage automatique et l'analyse prédictive pour automatiser et optimiser les processus de gestion financière dans l'EPM (Enterprise Performance Management).",
    "avantages benefices ia epm finance": "Les avantages incluent : automatisation des processus (réduction 30-50% du temps), prévisions plus précises (+15-25%), détection d'anomalies en temps réel, optimisation continue, et réduction significative des erreurs humaines dans les processus financiers.",
    "integration implementation deploiement ia epm": "L'intégration de l'IA en EPM suit 6 étapes clés : 1) Audit des données 2) Définition des cas d'usage 3) Sélection des technologies 4) Phase pilote 5) Déploiement progressif 6) Formation des équipes.",
    "roi retour investissement cout benefices": "ROI attendu avec l'IA : 200-400% sur 3 ans. Gains typiques mesurés : +30-50% productivité, +15-25% précision des prévisions, -20-35% réduction coûts, -40-60% délais de clôture comptable.",
    "technologies outils machine learning": "Technologies utilisées : Machine Learning, Deep Learning, NLP, Computer Vision, RPA, IA générative.",
    "cout prix tarif implementation ia finance": "Coûts variables : 50-100K€ pour un projet simple, 200-500K€ pour un projet moyen, 500K-2M€ pour une transformation complète. ROI en 18-24 mois.",
    "precision amelioration previsions forecasts": "L'IA améliore la précision grâce à l'analyse de patterns complexes et à l'apprentissage continu des modèles.",
    "securite protection donnees confidentialite": "Sécurité des données : chiffrement bout-en-bout, contrôle d’accès strict, conformité RGPD, hébergement sécurisé en Suisse."
  },

  en: {
    "what ai finance definition artificial intelligence": "AI in financial performance uses advanced algorithms, machine learning and predictive analytics to automate and optimize financial management processes within EPM frameworks.",
    "benefits advantages ai epm finance": "Benefits include: automation (30-50% faster), more accurate forecasts (+15-25%), real-time anomaly detection, continuous optimization, fewer human errors.",
    "integration implementation deployment ai epm": "Integration steps: 1) Data audit 2) Use case definition 3) Technology selection 4) Pilot phase 5) Gradual deployment 6) Team training.",
    "roi return investment cost benefits": "AI ROI: 200-400% over 3 years. Gains: +30-50% productivity, +15-25% accuracy, -20-35% costs, -40-60% closing time.",
    "technologies tools machine learning": "Technologies: Machine Learning, Deep Learning, NLP, Computer Vision, RPA, Generative AI.",
    "implementation cost price ai finance": "Costs: €50-100K small project, €200-500K medium, €500K-2M full transformation. ROI in 18-24 months.",
    "forecast accuracy improvement": "AI improves forecasts via advanced models, external variables integration and continuous learning.",
    "data security protection confidentiality": "Data security: end-to-end encryption, strict access control, GDPR compliance, Swiss hosting."
  },

  de: {
    "was ist ki finanzen definition": "KI in der Finanzperformance nutzt Algorithmen, maschinelles Lernen und prädiktive Analytik zur Automatisierung von Finanzprozessen im EPM.",
    "vorteile nutzen ki epm finanzen": "Vorteile: 30-50% Zeitersparnis, +15-25% Prognosegenauigkeit, Echtzeit-Anomalieerkennung, weniger Fehler.",
    "integration implementierung ki epm": "Schritte: 1) Datenprüfung 2) Use Cases 3) Technologieauswahl 4) Pilot 5) Rollout 6) Schulung.",
    "roi rendite investition kosten nutzen": "Erwarteter ROI: 200-400% in 3 Jahren. Typische Gewinne: +30-50% Produktivität, +15-25% Genauigkeit, -20-35% Kosten, -40-60% Closingzeit.",
    "technologien werkzeuge machine learning": "Technologien: Machine Learning, Deep Learning, NLP, Computer Vision, RPA, Generative KI.",
    "kosten preis implementierung ki": "Kosten: 50-100K€ klein, 200-500K€ mittel, 500K-2M€ groß. ROI in 18-24 Monaten.",
    "prognosegenauigkeit verbesserung": "KI verbessert Prognosen durch Mustererkennung und kontinuierliches Lernen.",
    "datensicherheit schutz vertraulichkeit": "Datensicherheit: End-to-End-Verschlüsselung, Zugriffsrechte, DSGVO-Konformität, Schweizer Hosting."
  }
};

// --- Questions rapides ---
const quickQuestions = {
  fr: [
    "Qu'est-ce que l'IA en finance ?",
    "Quels sont les avantages de l'IA pour l'EPM ?",
    "Comment intégrer l'IA dans mon système ?",
    "Quel est le ROI de l'IA en finance ?",
    "Quelles technologies IA utilisez-vous ?",
    "Combien coûte une implémentation IA ?",
    "L'IA peut-elle améliorer mes prévisions ?",
    "Comment assurer la sécurité des données ?"
  ],
  en: [
    "What is AI in finance?",
    "What are the benefits of AI for EPM?",
    "How to integrate AI in my system?",
    "What is the ROI of AI in finance?",
    "What AI technologies do you use?",
    "How much does AI implementation cost?",
    "Can AI improve my forecasts?",
    "How to ensure data security?"
  ],
  de: [
    "Was ist KI im Finanzwesen?",
    "Was sind die Vorteile von KI für EPM?",
    "Wie integriere ich KI in mein System?",
    "Was ist der ROI von KI im Finanzwesen?",
    "Welche KI-Technologien verwenden Sie?",
    "Wie viel kostet eine KI-Implementierung?",
    "Kann KI meine Prognosen verbessern?",
    "Wie stelle ich Datensicherheit sicher?"
  ]
};

// --- Fonction intelligente pour trouver une réponse ---
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // enlève accents
    .replace(/[^a-z0-9 ]/g, " ") // enlève ponctuation
    .trim();
}

function getAnswer(question, lang="fr") {
  const db = faq[lang];
  if (!db) return null;

  const qNorm = normalize(question);
  
  // Recherche exacte
  if (db[qNorm]) return db[qNorm];

  // Recherche par inclusion (match mots-clés)
  for (let key in db) {
    if (qNorm.includes(key.split(" ")[0])) {
      return db[key];
    }
  }

  return null;
}
