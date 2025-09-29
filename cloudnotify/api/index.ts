import express, { Request, Response, NextFunction } from 'express';
import { PubSub } from '@google-cloud/pubsub';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(express.json());

// Validate required environment variables
const requiredEnv: string[] = ['JWT_SECRET'];
requiredEnv.forEach((key: string) => {
  if (!process.env[key]) {
    console.error(`[FATAL] Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

const pubsub = new PubSub();
const topicName = 'notifications-topic';

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: 'Too many requests, please try again later.',
});

app.use(limiter);

interface SendRequestBody {
  type: 'email' | 'sms';
  to: string;
  message: string;
}

app.post('/send', async (req: Request, res: Response) => {
  const authHeader: string | undefined = req.headers.authorization;
  if (!authHeader) {
    console.warn('[WARN] Missing token');
    return res.status(401).send('Missing token');
  }

  try {
    jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET as string);
  } catch (err) {
    console.warn('[WARN] Invalid token:', err);
    return res.status(403).send('Invalid token');
  }

  const { type, to, message }: SendRequestBody = req.body;
  if (!type || !to || !message) {
    console.warn('[WARN] Missing fields in request body');
    return res.status(400).send('Missing fields');
  }

  try {
    const dataBuffer: Buffer = Buffer.from(JSON.stringify({ type, to, message }));
    await pubsub.topic(topicName).publish(dataBuffer);
    console.info(`[INFO] Message queued for type=${type}, to=${to}`);
    res.status(200).send('Message queued');
  } catch (err) {
    console.error('[ERROR] Failed to publish message:', err);
    res.status(500).send('Internal server error');
  }
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('[ERROR] Uncaught error:', err);
  res.status(500).send('Internal server error');
});

app.listen(3000, () => console.log('API listening on port 3000'));
