# CloudNotify Setup

## Prerequisites
- Node.js 18+
- Google Cloud Project (Pub/Sub, GKE, Container Registry)
- SendGrid and Twilio accounts

## Steps
1. Clone the repo and install dependencies in `api/` and `worker/`.
2. Set environment variables for JWT, SendGrid, and Twilio.
3. Build Docker images using provided Dockerfiles.
4. Push images to Google Container Registry.
5. Apply Kubernetes manifests in `k8s/`.
6. Configure secrets for JWT, SendGrid, and Twilio in GKE.

## CI/CD
- GitHub Actions workflow in `.github/workflows/deploy.yml` automates build and deployment to GKE.

---
See `architecture.md` and `api.md` for more details.