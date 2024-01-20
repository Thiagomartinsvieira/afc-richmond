import { Router } from "express";

const router = Router();

router.get("/create", (req, res) => {
  res.status(201).json({ message: "/users/create" });
});

export default router;
