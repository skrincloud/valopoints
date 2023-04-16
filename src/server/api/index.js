import { Router } from "express";
import MySQLDatabase from "../modules/shared/mysql/index.js";

const router = Router();

router.get("/", async function (request, response) {
  response.json({
    message: "Welcome to the API!",
  });
});

router.get("/health", async function (request, response) {
  const database = new MySQLDatabase()
  await database.ping()
  response.json({
    message: "Everything good!",
  });
});

export default router;
