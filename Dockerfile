# Use Google base image for NodeJS
FROM launcher.gcr.io/google/nodejs
<<<<<<< HEAD
# Copy application code.
COPY . /app/
# Change the working directory
WORKDIR /app
# Install dependencies.
RUN npm install
=======

# Copy application code.
COPY . /app/

# Change the working directory
WORKDIR /app

# Install dependencies.
RUN npm install

>>>>>>> d881da0132eb8e57971fa46fb7a77a9e24ecad19
# Start the Express app
CMD ["node", "server.js"]
