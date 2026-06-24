import cors from 'cors';
import express from 'express';
import { connectToDatabase, mongoUri } from './config/database';
import { apiRouter } from './routes/api';

const codespaceName = process.env.CODESPACE_NAME;
export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export const app = express();
export const port = Number(process.env.PORT) || 8000;

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-backend', apiBaseUrl });
});

app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error(error);
  response.status(500).json({ error: 'Internal server error' });
});

export const startServer = async (): Promise<void> => {
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
