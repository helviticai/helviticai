import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🛡️ IMPORTANT : la clé API sera stockée dans Render (pas dans le code !)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    // Appel OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Tu es un assistant IA spécialisé en performance financière. Donne des analyses claires et pratiques."
          },
          { role: "user", content: userMessage }
        ],
        temperature: 0.4
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Pas de réponse disponible.";

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "⚠️ Erreur serveur" });
  }
});

// 🚀 Render utilisera automatiquement PORT fourni
app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Backend HelviticBot démarré");
});
