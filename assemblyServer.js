import dotenv from "dotenv";
dotenv.config();

import express from "express";
import multer from "multer";
import FormData from "form-data";
import axios from "axios";

const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage });

const ASSEMBLY_API_KEY = process.env.ASSEMBLY_API_KEY;

console.log(
  "Assembly Key:",
  process.env.ASSEMBLY_API_KEY ? "Loaded ✅" : "Not Found ❌"
);



async function transcribeAudio(fileBuffer) {

  const uploadRes = await axios.post(
    "https://api.assemblyai.com/v2/upload",
    fileBuffer,
    {
      headers: {
        authorization: ASSEMBLY_API_KEY,
        "content-type": "application/octet-stream"
      }
    }
  );

  const audioUrl = uploadRes.data.upload_url;

  const transcriptRes = await axios.post(
    "https://api.assemblyai.com/v2/transcript",
    { audio_url: audioUrl },
    { headers: { authorization: ASSEMBLY_API_KEY } }
  );

  const transcriptId = transcriptRes.data.id;

  while (true) {

    const statusRes = await axios.get(
      `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
      { headers: { authorization: ASSEMBLY_API_KEY } }
    );

    if (statusRes.data.status === "completed") {
      return statusRes.data.text;
    }

    if (statusRes.data.status === "error") {
      throw new Error(statusRes.data.error);
    }

    await new Promise((r) => setTimeout(r, 3000));
  }
}


router.post(
  "/assembly/transcribe",
  upload.single("file"),
  async (req, res) => {

    if (!req.file) {
      return res.status(400).send({ error: "No file uploaded" });
    }

    try {

      const transcriptText = await transcribeAudio(req.file.buffer);

      req.app.locals.transcript = transcriptText;

      res.redirect("/generate");

    } catch (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    }
  }
);

export default router;