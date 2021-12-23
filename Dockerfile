FROM node:14-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package*.json .
RUN npm i
RUN npm i materialize-css@next
RUN npm add react-router-dom
RUN npm i  --save @fortawesome/fontawesome-svg-core
RUN npm i  --save @fortawesome/free-solid-svg-icons
RUN npm i  --save @fortawesome/react-fontawesome
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start"]