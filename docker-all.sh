#!/bin/bash

# List your service folders exactly
services=("movie-service" "booking-service" "showtime-service" "user-service")

for service in "${services[@]}"
do
  echo "➡️ Building and pushing $service"
  docker build -t aakashpatel22/$service:latest ./$service || { echo "❌ Build failed for $service"; exit 1; }
  docker push aakashpatel22/$service:latest || { echo "❌ Push failed for $service"; exit 1; }

  echo "🔁 Restarting deployment $service in namespace movie-app"
  kubectl rollout restart deployment $service -n movie-app || echo "⚠️ Deployment $service not found, skipping restart"

  echo "✅ $service processed"
done
