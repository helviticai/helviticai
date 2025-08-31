// faq.js - Base de connaissances complète IA & Performance Financière EPM

const faq = {
  fr: {
    // Messages système
    welcome: "Bonjour 👋 Je suis le chatbot Helvitic AI spécialisé en IA pour la performance financière. Posez-moi vos questions sur l'EPM, l'automatisation ou nos solutions.",
    greeting: "Bonjour! Comment puis-je vous aider avec l'IA en finance ?",
    services: "Nous offrons des solutions IA pour l'EPM : prévisions automatisées, budgeting intelligent, détection d'anomalies, et optimisation des processus financiers.",
    contact: "Vous pouvez nous contacter via email : helviticaich@gmail.com ou par téléphone +41 22 123 45 67",
    goodbye: "Merci pour votre intérêt ! N'hésitez pas à nous recontacter pour vos projets IA & Finance 👋",
    unknown: "Je n'ai pas trouvé d'information sur ce sujet. Pouvez-vous reformuler ou poser une question sur l'IA en finance, l'EPM, ou nos solutions ?",

    // Base de connaissances IA & Finance
    "qu'est-ce que l'ia en finance": "L'IA appliquée à la performance financière consiste à utiliser des algorithmes avancés, l'apprentissage automatique et l'analyse prédictive pour automatiser, optimiser et améliorer les processus de gestion financière dans le cadre de l'EPM.",
    "ia finance definition": "L'IA appliquée à la performance financière consiste à utiliser des algorithmes avancés, l'apprentissage automatique et l'analyse prédictive pour automatiser, optimiser et améliorer les processus de gestion financière dans le cadre de l'EPM.",
    
    "avantages ia epm": "Les avantages incluent : automatisation des processus (réduction 30-50% du temps), prévisions plus précises (+15-25%), détection d'anomalies en temps réel, optimisation continue, et réduction des erreurs humaines.",
    "benefices ia finance": "Les avantages incluent : automatisation des processus (réduction 30-50% du temps), prévisions plus précises (+15-25%), détection d'anomalies en temps réel, optimisation continue, et réduction des erreurs humaines.",
    
    "ia planification financiere": "L'IA transforme la planification via des modèles prédictifs sophistiqués, simulation de scénarios multiples en temps réel, intégration automatique de variables externes, génération automatique de budgets/forecasts.",
    "planning financier ia": "L'IA transforme la planification via des modèles prédictifs sophistiqués, simulation de scénarios multiples en temps réel, intégration automatique de variables externes, génération automatique de budgets/forecasts.",
    
    "processus epm automatisables": "Processus automatisables : consolidation financière, reporting automatisé, budgeting/forecasting, analyse de variance, allocation des coûts, contrôle de gestion, réconciliation des données.",
    "automatisation epm": "Processus automatisables : consolidation financière, reporting automatisé, budgeting/forecasting, analyse de variance, allocation des coûts, contrôle de gestion, réconciliation des données.",
    
    "precision previsions ia": "L'IA améliore la précision des prévisions grâce à l'analyse de patterns complexes, intégration de variables externes (indicateurs économiques, saisonnalité), apprentissage continu qui affine les modèles.",
    "forecasting ia": "L'IA améliore la précision des prévisions grâce à l'analyse de patterns complexes, intégration de variables externes (indicateurs économiques, saisonnalité), apprentissage continu qui affine les modèles.",
    
    "ia analyse risques": "Oui, l'IA excelle dans l'analyse des risques : détection automatique d'anomalies, évaluation de probabilités de scénarios, surveillance continue des seuils critiques, alertes préventives automatiques.",
    "risk management ia": "Oui, l'IA excelle dans l'analyse des risques : détection automatique d'anomalies, évaluation de probabilités de scénarios, surveillance continue des seuils critiques, alertes préventives automatiques.",
    
    "integration ia epm": "L'intégration se fait en 6 étapes : 1) Audit des données 2) Définition des cas d'usage 3) Sélection des outils 4) Phase pilote 5) Déploiement progressif 6) Formation des équipes.",
    "comment integrer ia": "L'intégration se fait en 6 étapes : 1) Audit des données 2) Définition des cas d'usage 3) Sélection des outils 4) Phase pilote 5) Déploiement progressif 6) Formation des équipes.",
    
    "prerequis techniques ia": "Prérequis : infrastructure cloud/on-premise suffisante, données propres et cohérentes, APIs pour intégration, sécurité renforcée, compétences IA/data science, gouvernance claire.",
    "prerequis ia finance": "Prérequis : infrastructure cloud/on-premise suffisante, données propres et cohérentes, APIs pour intégration, sécurité renforcée, compétences IA/data science, gouvernance claire.",
    
    "delais resultats ia": "Premiers résultats : 2-3 mois (détection anomalies), 4-6 mois (automatisation processus), 6-12 mois (modèles prédictifs), 12-24 mois (transformation complète EPM).",
    "timeline ia implementation": "Premiers résultats : 2-3 mois (détection anomalies), 4-6 mois (automatisation processus), 6-12 mois (modèles prédictifs), 12-24 mois (transformation complète EPM).",
    
    "technologies ia finance": "Technologies clés : Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, RPA (Robotic Process Automation), IA générative pour création de contenu.",
    "outils ia epm": "Technologies clés : Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, RPA (Robotic Process Automation), IA générative pour création de contenu.",
    
    "solutions epm ia existantes": "Solutions avec IA intégrée : Oracle EPM Cloud (prédictif avancé), SAP Analytics Cloud (IA planning), IBM Planning Analytics (analyse cognitive), Microsoft Power BI, Workday Adaptive Planning.",
    "logiciels epm ia": "Solutions avec IA intégrée : Oracle EPM Cloud (prédictif avancé), SAP Analytics Cloud (IA planning), IBM Planning Analytics (analyse cognitive), Microsoft Power BI, Workday Adaptive Planning.",
    
    "roi ia finance": "ROI attendu : 200-400% sur 3 ans. Gains typiques : +30-50% productivité, +15-25% précision prévisions, -20-35% coûts processus, -40-60% délais de clôture.",
    "retour investissement ia": "ROI attendu : 200-400% sur 3 ans. Gains typiques : +30-50% productivité, +15-25% précision prévisions, -20-35% coûts processus, -40-60% délais de clôture.",
    
    "cout implementation ia": "Coûts variables selon scope : solutions simples 50-100K€, projets moyens 200-500K€, transformation complète 500K-2M€. ROI généralement atteint en 18-24 mois.",
    "prix solution ia": "Coûts variables selon scope : solutions simples 50-100K€, projets moyens 200-500K€, transformation complète 500K-2M€. ROI généralement atteint en 18-24 mois.",
    
    "securite donnees ia": "Sécurité renforcée : chiffrement bout-en-bout, accès basé sur les rôles, audit trails complets, conformité RGPD, hébergement sécurisé (Swiss hosting disponible), anonymisation des données sensibles.",
    "data security ia": "Sécurité renforcée : chiffrement bout-en-bout, accès basé sur les rôles, audit trails complets, conformité RGPD, hébergement sécurisé (Swiss hosting disponible), anonymisation des données sensibles.",
    
    "formation equipes ia": "Formation requise : sensibilisation concepts IA, cas d'usage financiers concrets, manipulation outils pratiques, interprétation des résultats IA, bonnes pratiques gouvernance, formation continue.",
    "training ia finance": "Formation requise : sensibilisation concepts IA, cas d'usage financiers concrets, manipulation outils pratiques, interprétation des résultats IA, bonnes pratiques gouvernance, formation continue.",
    
    "ia remplace controleurs": "Non, l'IA ne remplace pas les contrôleurs de gestion : elle élimine les tâches répétitives, libère du temps pour l'analyse, renforce leur rôle de conseil stratégique et d'interprétation des insights IA.",
    "remplacement emplois ia": "Non, l'IA ne remplace pas les contrôleurs de gestion : elle élimine les tâches répétitives, libère du temps pour l'analyse, renforce leur rôle de conseil stratégique et d'interprétation des insights IA.",
    
    "tendances ia epm": "Tendances émergentes : IA générative (création rapports automatiques), real-time analytics, démocratisation outils IA, IA explicable (transparence), edge computing, intégration critères ESG.",
    "futur ia finance": "Tendances émergentes : IA générative (création rapports automatiques), real-time analytics, démocratisation outils IA, IA explicable (transparence), edge computing, intégration critères ESG."
  },

  en: {
    welcome: "Hello 👋 I'm the Helvitic AI chatbot specialized in AI for financial performance. Ask me about EPM, automation, or our solutions.",
    greeting: "Hello! How can I help you with AI in finance?",
    services: "We provide AI solutions for EPM: automated forecasting, intelligent budgeting, anomaly detection, and financial process optimization.",
    contact: "You can reach us via email: helviticaich@gmail.com or phone +41 22 123 45 67",
    goodbye: "Thank you for your interest! Feel free to contact us again for your AI & Finance projects 👋",
    unknown: "I couldn't find information on this topic. Could you rephrase or ask about AI in finance, EPM, or our solutions?",

    "what is ai in finance": "AI in financial performance uses advanced algorithms, machine learning and predictive analytics to automate, optimize and improve financial management processes within EPM frameworks.",
    "ai finance definition": "AI in financial performance uses advanced algorithms, machine learning and predictive analytics to automate, optimize and improve financial management processes within EPM frameworks.",
    
    "ai epm benefits": "Benefits include: process automation (30-50% time reduction), more accurate forecasts (+15-25%), real-time anomaly detection, continuous optimization, and reduced human errors.",
    "ai finance advantages": "Benefits include: process automation (30-50% time reduction), more accurate forecasts (+15-25%), real-time anomaly detection, continuous optimization, and reduced human errors.",
    
    "ai financial planning": "AI transforms planning through sophisticated predictive models, real-time multi-scenario simulation, automatic integration of external variables, automated budget/forecast generation.",
    "financial planning ai": "AI transforms planning through sophisticated predictive models, real-time multi-scenario simulation, automatic integration of external variables, automated budget/forecast generation.",
    
    "ai integration epm": "Integration in 6 steps: 1) Data audit 2) Use case definition 3) Tool selection 4) Pilot phase 5) Progressive deployment 6) Team training.",
    "how to integrate ai": "Integration in 6 steps: 1) Data audit 2) Use case definition 3) Tool selection 4) Pilot phase 5) Progressive deployment 6) Team training.",
    
    "ai finance roi": "Expected ROI: 200-400% over 3 years. Typical gains: +30-50% productivity, +15-25% forecast accuracy, -20-35% process costs, -40-60% closing time.",
    "return on investment ai": "Expected ROI: 200-400% over 3 years. Typical gains: +30-50% productivity, +15-25% forecast accuracy, -20-35% process costs, -40-60% closing time."
  },

  de: {
    welcome: "Hallo 👋 Ich bin der Helvitic AI Chatbot für KI in der Finanzperformance. Fragen Sie mich zu EPM, Automatisierung oder unseren Lösungen.",
    greeting: "Hallo! Wie kann ich Ihnen mit KI im Finanzwesen helfen?",
    services: "Wir bieten KI-Lösungen für EPM: automatisierte Prognosen, intelligente Budgetierung, Anomalieerkennung und Optimierung von Finanzprozessen.",
    contact: "Sie erreichen uns per E-Mail: helviticaich@gmail.com oder Telefon +41 22 123 45 67",
    goodbye: "Vielen Dank für Ihr Interesse! Kontaktieren Sie uns gerne für Ihre KI & Finance Projekte 👋",
    unknown: "Ich konnte keine Information zu diesem Thema finden. Können Sie umformulieren oder zu KI im Finanzwesen, EPM oder unseren Lösungen fragen?",

    "was ist ki in finanzen": "KI in der Finanzperformance nutzt fortgeschrittene Algorithmen, maschinelles Lernen und prädiktive Analytik zur Automatisierung, Optimierung und Verbesserung von Finanzmanagementprozessen im EPM-Rahmen.",
    "ki finanzen definition": "KI in der Finanzperformance nutzt fortgeschrittene Algorithmen, maschinelles Lernen und prädiktive Analytik zur Automatisierung, Optimierung und Verbesserung von Finanzmanagementprozessen im EPM-Rahmen.",
    
    "ki epm vorteile": "Vorteile: Prozessautomatisierung (30-50% Zeitreduktion), präzisere Prognosen (+15-25%), Echtzeit-Anomalieerkennung, kontinuierliche Optimierung, weniger menschliche Fehler.",
    "ki vorteile finanzen": "Vorteile: Prozessautomatisierung (30-50% Zeitreduktion), präzisere Prognosen (+15-25%), Echtzeit-Anomalieerkennung, kontinuierliche Optimierung, weniger menschliche Fehler."
  }
};

// Suggestions de questions fréquentes par thème
const quickQuestions = {
  fr: [
    "Qu'est-ce que l'IA en finance ?",
    "Quels sont les avantages de l'IA pour l'EPM ?",
    "Comment intégrer l'IA dans mon système ?",
    "Quel est le ROI de l'IA en finance ?",
    "Quelles technologies IA utilisez-vous ?",
    "Combien coûte une implémentation IA ?",
    "L'IA peut-elle aider pour les prévisions ?",
    "Comment assurer la sécurité des données ?",
    "Quels processus peuvent être automatisés ?",
    "Comment former les équipes à l'IA ?"
  ],
  en: [
    "What is AI in finance?",
    "What are the benefits of AI for EPM?",
    "How to integrate AI in my system?",
    "What is the ROI of AI in finance?",
    "What AI technologies do you use?",
    "How much does AI implementation cost?",
    "Can AI help with forecasting?",
    "How to ensure data security?",
    "Which processes can be automated?",
    "How to train teams on AI?"
  ],
  de: [
    "Was ist KI im Finanzwesen?",
    "Was sind die Vorteile von KI für EPM?",
    "Wie integriere ich KI in mein System?",
    "Was ist der ROI von KI im Finanzwesen?",
    "Welche KI-Technologien verwenden Sie?",
    "Wie viel kostet eine KI-Implementierung?",
    "Kann KI bei Prognosen helfen?",
    "Wie stelle ich Datensicherheit sicher?",
    "Welche Prozesse können automatisiert werden?",
    "Wie schule ich Teams für KI?"
  ]
};

// Fonction de recherche intelligente dans la FAQ
function searchFAQ(query, lang = 'fr') {
  const faqLang = faq[lang] || faq.fr;
  const normalizedQuery = query.toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim();

  // Recherche par mots-clés
  const keywords = normalizedQuery.split(' ').filter(word => word.length > 2);
  let bestMatch = null;
  let maxScore = 0;

  for (const [key, value] of Object.entries(faqLang)) {
    let score = 0;
    const normalizedKey = key.toLowerCase();
    const normalizedValue = value.toLowerCase();

    // Score basé sur la correspondance des mots-clés
    keywords.forEach(keyword => {
      if (normalizedKey.includes(keyword)) score += 3;
      if (normalizedValue.includes(keyword)) score += 1;
    });

    // Bonus pour correspondance exacte
    if (normalizedKey.includes(normalizedQuery)) score += 5;

    if (score > maxScore) {
      maxScore = score;
      bestMatch = { key, value, score };
    }
  }

  return maxScore > 2 ? bestMatch : null;
}
