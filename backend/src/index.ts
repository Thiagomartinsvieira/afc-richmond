import express from "express";
import cors from "cors";
import { env } from "./config/env-config";

const app = express();
const port = env.PORT || 3001;

import userRoutes from "./api/routes/userRoutes";
import mongoose from "mongoose";

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.status(201).json({ message: "Hello, World" });
});
app.listen(port, () => {
  console.log(`Server running at port: ${port} 🔥`);
});

mongoose
  .connect(env.DATABASE_URL)
  .then(() => {
    console.log("app connected to database");
  })
  .catch((err) => console.log(err));
