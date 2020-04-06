FROM node:latest
MAINTAINER George Koenig <george.g.koenig@gmail.com>

# install npm
RUN apt-get update && apt-get install --no-install-recommends -y \
    nodejs

# create working directory
RUN mkdir -p /qmk_helper_bot
WORKDIR /qmk_helper_bot

# copy and install qmk_helper_bot
COPY package.json /qmk_helper_bot
RUN npm install

# our bot
COPY . /qmk_helper_bot

# start bot
CMD ["node", "qmkbot.js"]
