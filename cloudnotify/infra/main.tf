# Terraform configuration for CloudNotify GCP resources

provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_pubsub_topic" "notifications" {
  name = "notifications-topic"
}

resource "google_pubsub_subscription" "notifications_sub" {
  name  = "notifications-sub"
  topic = google_pubsub_topic.notifications.name
}

resource "google_container_cluster" "cloudnotify" {
  name     = "cloudnotify-cluster"
  location = var.zone
  initial_node_count = 2
}

resource "google_container_node_pool" "primary_nodes" {
  name       = "primary-node-pool"
  cluster    = google_container_cluster.cloudnotify.name
  location   = var.zone
  node_count = 2
}

variable "project_id" {}
variable "region" { default = "us-central1" }
variable "zone" { default = "us-central1-a" }
