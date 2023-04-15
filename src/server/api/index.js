import { Router } from "express";

const router = Router();

router.get("/", async function (request, response) {
  response.json({
    message: "Welcome to the API!",
  });
});

export default router;
