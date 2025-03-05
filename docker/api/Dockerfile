# Use the official Node.js 22 image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/api

# Copy the package.json and package-lock.json from the app directory to the container
COPY ./api/package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code from app/ directory to the container
COPY ./api .

# Expose port 3000
EXPOSE 3000

# Set the default command based on NODE_ENV
CMD [ "sh", "-c", "if [ \"$NODE_ENV\" = 'development' ]; then npm run dev; else npm run start; fi" ]