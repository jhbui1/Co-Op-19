# 1. docker build -f RestaurantReviewsMvc.Dockerfile -t rest-reviews:3.0 ../../nick-project1
# 2. docker run --rm -it -p 8000:80 -e "ConnectionStrings__RestaurantReviewsDb=(connection string)" rest-reviews:3.0

FROM node:12.2.0 AS build

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# when docker goes through a dockerfile's steps, it keeps track of all the "inputs"
# to each given line.
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0

#docker run -v C:/Users/Jon/source/repos/Co-Op-19/src/app -v src/app/node_modules -p 4203:4200 -d --rm co-op19:1.0

