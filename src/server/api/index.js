import { Router } from "express";
import MySQLDatabase from "../modules/shared/mysql/index.js";

const router = Router();

router.get("/", async function (request, response) {
  response.json({
    message: "Welcome to the API!",
  });
});

router.get("/health", async function (request, response) {
  try {
    const database = new MySQLDatabase()
    await database.ping()
    response.json({
      message: "Everything good!",
    });
  } catch (error) {
    response.json(500, {
      message: "There is a problem in the app",
    });
  }
});

export default router;
