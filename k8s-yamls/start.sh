#!/bin/bash

# start.sh - Apply YAML files to start the application in movie-app namespace

echo "Applying namespace..."
kubectl apply -f namespace.yaml

kubectl create configmap mysql-init-scripts --from-file=init-db.sql -n movie-app

echo "Applying secrets and PVC..."
kubectl apply -f app-secrets.yaml -f mysql-pvc.yaml -n movie-app

echo "Applying MySQL resources..."
kubectl apply -f mysql-deployment.yaml -f mysql-service.yaml -n movie-app

echo "Applying microservices resources..."
kubectl apply -f booking-service-deployment.yaml \
              -f booking-service-service.yaml \
              -f movie-service-deployment.yaml \
              -f movie-service-service.yaml \
              -f showtime-service-deployment.yaml \
              -f showtime-service-service.yaml \
              -f user-service-deployment.yaml \
              -f user-service-service.yaml \
              -f frontend-deployment.yaml \
              -f frontend-service.yaml -n movie-app

echo "Applying ingress..."
kubectl apply -f ingress.yaml -n movie-app
kubectl apply -f elk.yaml

echo "Application started successfully in namespace movie-app!"