# CloudNotify

CloudNotify is a cloud-native notification system designed for scalable, secure, and reliable delivery of messages via email and SMS. It consists of two main services:

API Service: A TypeScript Express API that authenticates requests, applies rate limiting, and publishes notification messages to a Google Pub/Sub topic.
Worker Service: A Node.js subscriber that processes Pub/Sub messages and delivers notifications using SendGrid (email) and Twilio (SMS).
The project is production-ready, featuring:

Dockerized services with multi-stage builds and non-root users.
Kubernetes manifests with resource limits, security context, and health probes.
Infrastructure-as-Code via Terraform for GCP resources.
CI/CD pipeline for automated deployment to Google Kubernetes Engine (GKE).
Documentation for architecture, API usage, and setup.
