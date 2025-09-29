import { PubSub, Message } from '@google-cloud/pubsub';
import sgMail from '@sendgrid/mail';
import twilio from 'twilio';

// Validate required environment variables
const requiredEnv: string[] = ['SENDGRID_API_KEY', 'TWILIO_SID', 'TWILIO_TOKEN', 'TWILIO_FROM'];
requiredEnv.forEach((key: string) => {
  if (!process.env[key]) {
    console.error(`[FATAL] Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
const twilioClient = twilio(process.env.TWILIO_SID as string, process.env.TWILIO_TOKEN as string);

const pubsub = new PubSub();
const subscriptionName = 'notifications-sub';

interface NotificationMessage {
  type: 'email' | 'sms';
  to: string;
  message: string;
}

const messageHandler = async (message: Message): Promise<void> => {
  let parsed: NotificationMessage;
  try {
    parsed = JSON.parse(message.data.toString()) as NotificationMessage;
  } catch (err) {
    console.error('[ERROR] Failed to parse message:', err);
    message.nack();
    return;
  }
  const { type, to, message: text } = parsed;

  try {
    if (type === 'email') {
      await sgMail.send({ to, from: 'noreply@cloudnotify.dev', subject: 'Notification', text });
      console.info(`[INFO] Email sent to ${to}`);
    } else if (type === 'sms') {
      await twilioClient.messages.create({ to, from: process.env.TWILIO_FROM as string, body: text });
      console.info(`[INFO] SMS sent to ${to}`);
    } else {
      console.warn(`[WARN] Unknown notification type: ${type}`);
      message.nack();
      return;
    }
    message.ack();
  } catch (err) {
    console.error('Delivery failed:', err);
    message.nack();
  }
};

pubsub.subscription(subscriptionName).on('message', messageHandler);

// Health check (basic)
process.on('uncaughtException', (err: Error) => {
  console.error('[FATAL] Uncaught exception:', err);
  process.exit(1);
});
process.on('unhandledRejection', (reason: unknown) => {
  console.error('[FATAL] Unhandled rejection:', reason);
  process.exit(1);
});
