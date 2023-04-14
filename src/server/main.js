import express from "express";
import server from "vite-express";

import api from "./api/index.js";

const port = 5800;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

if (process.env.NODE_ENV === "production") {
  app.listen(port);
} else {
  server.listen(app, port);
}
