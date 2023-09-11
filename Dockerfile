# Pull the node image
FROM node:14.17.2-stretch-slim
# Set the working dir of the image
WORKDIR /react-docker-example

# Copy needed files
COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

# Install dependencies
RUN npm install

# Start the app
CMD ["npm", "start"]