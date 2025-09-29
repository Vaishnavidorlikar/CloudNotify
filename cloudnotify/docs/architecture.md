# CloudNotify Architecture

CloudNotify is a cloud-native notification system with two main components:

- **API Service** (`api/`): TypeScript Express API that receives notification requests, authenticates them, applies rate limiting, and publishes messages to a Google Pub/Sub topic.
- **Worker Service** (`worker/`): Subscribes to the Pub/Sub topic, processes messages, and delivers notifications via SendGrid (email) or Twilio (SMS).

## Flow
1. Client sends a POST request to `/send` endpoint with notification details and JWT token.
2. API validates the token, rate limits, and publishes the message to Pub/Sub.
3. Worker receives the message, determines the type (email/SMS), and sends via the appropriate provider.

## Deployment
- Docker containers for API and Worker.
- Kubernetes manifests for scalable deployment.
- CI/CD pipeline via GitHub Actions to GKE.

---
See `docs/api.md` for API details and `docs/setup.md` for setup instructions.