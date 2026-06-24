import express from 'express';
import { apiBaseUrl } from './config/apiUrl';
import { connectToDatabase, mongoUri } from './config/database';
import { apiRouter } from './routes/api';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl });
});

app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).json({ error: 'Internal server error' });
});

const startServer = async (): Promise<void> => {
  try {
    await connectToDatabase();
    console.log(`MongoDB connected: ${mongoUri}`);
  } catch (error) {
    console.warn('MongoDB connection failed; API will still start.');
    console.warn(error);
  }

  app.listen(port, () => {
    console.log(`Backend API running on port ${port}`);
    console.log(`Backend API base URL: ${apiBaseUrl}`);
  });
};

void startServer();
