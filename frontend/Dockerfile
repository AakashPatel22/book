# Build Stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the React app
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy the build output from the build stage to nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for nginx to serve the app
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
# # Use the official Node.js runtime as the base image
# FROM node:18 as build

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the entire application code to the container
# COPY . .

# # Build the React app for production
# RUN npm run build

# # Use Nginx as the production server
# FROM nginx:alpine

# # Copy the built React app to Nginx's web server directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80 for the Nginx server
# EXPOSE 80

# # Start Nginx when the container runs
# CMD ["nginx", "-g", "daemon off;"]