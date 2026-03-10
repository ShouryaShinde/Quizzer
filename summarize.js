import express from "express";
import 'dotenv/config';
import OpenAI from "openai";

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1"
});

// Generate summary + quiz using NVIDIA Llama
async function generateFromNvidia(transcriptText) {

  const prompt = `
${transcriptText}

Create:
- summary
- questions array
- options array (4 options each)
- answers array (index of correct option)

Return ONLY valid JSON in this format:

{
  "summary": "...",
  "questions": [],
  "options": [],
  "answers": []
}
`;

  const completion = await openai.chat.completions.create({
    model: "meta/llama-3.3-70b-instruct",
    messages: [
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.2,
    top_p: 0.7,
    max_tokens: 1024
  });

  let text = completion.choices[0].message.content;

  text = text.replace(/```json|```/g, "").trim();

  return JSON.parse(text);
}


// Generate summary route
router.get("/generate", async (req, res) => {

  try {

    const text = req.query.text || req.app.locals.transcript;

    if (!text) {
      return res.status(400).send("No text provided");
    }

    const data = await generateFromNvidia(text);

    req.app.locals.summary = data.summary;
    req.app.locals.questions = data.questions;
    req.app.locals.options = data.options;
    req.app.locals.answers = data.answers;

    res.render("transcribe.ejs", { summary: data.summary });

  } catch (err) {

    console.error(err);
    res.status(500).send("Error generating summary");

  }
});


// Quiz page
router.get("/quiz-generated", (req, res) => {

  const { questions, options, answers } = req.app.locals;

  if (!questions) {
    return res.status(400).send("Generate quiz first");
  }

  res.render("quiz.ejs", { questions, options, answers });

});

export default router;