import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import membershipRoutes from './api/routes/membershipRoutes';
import userRoutes from './api/routes/userRoutes';
import { env } from './config/env-config';

const app = express();
const port = env.PORT ? Number(env.PORT) : 3001;

app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/membership', membershipRoutes);

mongoose
  .connect(env.DATABASE_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at port: ${port} 🔥`);
    });
    console.log('Connected to Database 🏗️');
  })
  .catch((err) => {
    console.error(err);
  });