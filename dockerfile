# Use an official Node.js runtime as our base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the codebase
COPY . .

# Expose the port used by Discord.js
EXPOSE 3000 80 8080

# Run the command to start the bot when the container starts
CMD ["node", "index.js"]
