// server.js
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // sert ton index.html + css/js

// Endpoint API pour ton chatbot
app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Tu es HelviticBot, une IA experte en performance financière et en conseil aux entreprises." },
          { role: "user", content: userMessage }
        ]
      })
    });

    const data = await response.json();
    const botReply = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas de réponse pour l'instant.";

    res.json({ reply: botReply });
  } catch (error) {
    console.error("Erreur API:", error);
    res.status(500).json({ reply: "Erreur de communication avec l'IA." });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});
