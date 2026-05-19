import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import { fileURLToPath } from "url";
import mainRoutes from "./routes/index.js";

dotenv.config();

// Reconstruindo __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(mainRoutes);

server.use((req, res) => {
  res.render("pages/404");
});

const PORTA = process.env.PORT || 3000;
server.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`));
