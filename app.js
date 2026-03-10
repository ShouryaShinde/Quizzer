import express from "express";


import assemblyRoutes from "./assemblyServer.js";
import summarizeRoutes from "./summarize.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.use("/", assemblyRoutes);
app.use("/", summarizeRoutes);


app.get("/", (req, res) => res.render("index.ejs"));
app.get("/upload", (req, res) => res.render("upload.ejs"));
app.get("/quiz", (req, res) => res.render("quiz.ejs"));
app.get("/transcribe", (req, res) => res.render("transcribe.ejs"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});