# Use the official Node.js 22 image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json from the app directory to the container
COPY ./app/package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code from app/ directory to the container
COPY ./app .

# Ensure Next.js watches changes inside Docker
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true

# Expose port 3000
EXPOSE 3001

# Expose port 6006
EXPOSE 6006

# Set the default command based on NODE_ENV
CMD [ "npm", "run", "dev" ]