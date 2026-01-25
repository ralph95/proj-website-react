# Use Node.js image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Accept API URL as a build argument
ARG VITE_API_URL

# Set environment variable for Vite to use at build time
ENV VITE_API_URL=$VITE_API_URL

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Vite app (outputs to /app/dist)
# VITE_API_URL will be replaced in the JS bundle here
RUN npm run build

# Set runtime environment variable (optional for Node, not React)
ENV PORT=3000

# Expose port 3000
EXPOSE 3000

# Start the Vite preview server
CMD ["npm", "run", "preview"]
