import { Router } from "express";

const router = Router();

router.get("/", async function (request, response) {
  response.json({ message: "Welcome!" });
});

export default router;
