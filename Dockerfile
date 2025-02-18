# Use the official Node.js image as the base image
FROM node:20-alpine as builder

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for the production environment
FROM node:20-alpine as production

# Set the working directory
WORKDIR /

# Copy the build artifacts from the builder stage
COPY --from=builder .next ./

# Install only production dependencies
COPY package*.json ./
RUN npm install --production

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
