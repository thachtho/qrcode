# Sử dụng một base image Node.js
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json và package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy các files của ứng dụng NestJS
COPY . .

# Expose cổng mà ứng dụng NestJS sử dụng
EXPOSE 3000

# Command để chạy ứng dụng
CMD ["yarn", "start:dev"]
