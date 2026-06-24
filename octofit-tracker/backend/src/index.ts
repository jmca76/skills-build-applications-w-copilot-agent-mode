import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT) || 8000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

const startServer = async (): Promise<void> => {
  try {
    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${mongoUri}`);
  } catch (error) {
    console.warn('MongoDB connection failed; API will still start.');
    console.warn(error);
  }

  app.listen(port, () => {
    console.log(`Backend API running on port ${port}`);
  });
};

void startServer();
