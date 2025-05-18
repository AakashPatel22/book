#!/bin/bash

# stop.sh - Delete YAML files to stop the application in movie-app namespace

echo "Deleting ingress..."
kubectl delete -f ingress.yaml --ignore-not-found=true -n movie-app

echo "Deleting microservices resources..."
kubectl delete -f booking-service-deployment.yaml \
               -f booking-service-service.yaml \
               -f movie-service-deployment.yaml \
               -f movie-service-service.yaml \
               -f showtime-service-deployment.yaml \
               -f showtime-service-service.yaml \
               -f user-service-deployment.yaml \
               -f user-service-service.yaml \
               -f frontend-deployment.yaml \
               -f frontend-service.yaml --ignore-not-found=true -n movie-app

echo "Deleting MySQL resources..."
kubectl delete -f mysql-deployment.yaml -f mysql-service.yaml --ignore-not-found=true -n movie-app

echo "Deleting secrets and PVC..."
kubectl delete -f app-secrets.yaml -f mysql-pvc.yaml --ignore-not-found=true -n movie-app
kubectl delete -f elk.yaml --ignore-not-found=true -n movie-app

echo "Deleting namespace..."
kubectl delete -f namespace.yaml --ignore-not-found=true

echo "Application stopped successfully in namespace movie-app!"