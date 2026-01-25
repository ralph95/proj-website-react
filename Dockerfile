# Use Node.js image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Vite app (outputs to /app/dist)
RUN npm run build

# Set the environment variable so Vite can use it during build
ENV VITE_API_URL=$VITE_API_URL
ENV PORT=3000

# Expose port 3000
EXPOSE 3000

# Start the Vite preview server
CMD ["npm", "run", "preview"]