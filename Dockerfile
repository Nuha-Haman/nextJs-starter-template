# Use a Node.js base image
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for running the app
FROM node:18-alpine AS runner

WORKDIR /app

# Copy built app from builder stage
COPY --from=builder /app ./

# Set environment variables (optional)
ENV NODE_ENV=production

# Start Next.js
CMD ["npm", "run", "start"]
