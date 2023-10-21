# pull the node.js docker image
FROM node:18-alpine3.14
# create a app diretory in the image for mounting the application
WORKDIR /usr/src/app
# copy package.json on the image so that all dependencies will be installed
COPY package*.json ./
# run the npm install command inside the image for production
# the --only=production will install packages with all of ts depednencies
RUN npm install --only=production
# copy all application files (excluding all mentioned in .dockeeringone)
# in the image
COPY . .
# expose the port from the image to access the application
# this is the container port in which the application is running
EXPOSE 9076
# run the npm command to start
# create a command-let in package.json to run the applciation
CMD [ "npm", "start"]