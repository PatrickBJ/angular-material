FROM node:latest
COPY package.json ./
RUN npm i && mkdir /app
RUN npm i -g @angular/cli --unsafe

WORKDIR /app
ENTRYPOINT  cp -R /node_modules /app  && npm start 
EXPOSE 4200 49153

## To build the image
# docker build --force-rm -t angular-material .

## To run the image
# docker run -it  --rm --user "$(id -u):$(id -g)" -p "4200:4200" -p "49153:49153" -v $(pwd):/app angular-material
# docker run -it -p "4200:4200" -p "49153:49153" -v ${pwd}:/app angular-material
