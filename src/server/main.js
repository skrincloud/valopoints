import express from "express";
import server from "vite-express";

import api from "./api/index.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

server.listen(app, port);
