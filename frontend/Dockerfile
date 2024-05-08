# Use a lightweight Node.js image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that the Next.js app is running on
EXPOSE 3000

# Define the command to start the Next.js app
CMD ["npm", "start"]
