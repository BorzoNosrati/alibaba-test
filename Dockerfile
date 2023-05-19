
# Get Latest node image from docker
FROM node:alpine as production

# Declaring envirenment 
ENV NODE_ENV production

# Create work directory
WORKDIR /app

# copy packge.json to install packages later
COPY ./package.json /app

# Install packages
RUN npm install

# Copy all files to work directory ## BUT files that included in "".dockerignore""
COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=production /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

#######################
