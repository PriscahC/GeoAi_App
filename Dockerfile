# Use an official lightweight Node.js image as a base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Expose the port on which your application will run
EXPOSE 8080

# Command to run the application
CMD [ "npm", "start" ]
