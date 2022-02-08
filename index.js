require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/routes");
const { connection } = require("./database/mongoose");
const SERVER_PORT = process.env.SERVER_PORT;

const app = express();

const corsOptions = {
  exposedHeaders: "Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(SERVER_PORT, () =>
  console.log(`O servidor está rodando na porta ${SERVER_PORT}`)
);
