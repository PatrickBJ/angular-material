FROM node:latest
COPY package.json ./
RUN npm i && mkdir /sms
WORKDIR /sms
ENTRYPOINT  cp -R /node_modules /sms  && npm start 
EXPOSE 4200 49153

## To build the image
# docker build --force-rm -t sms-manager .

## To run the image
# docker run -it -p "4200:4200" -p "49153:49153" -v $(pwd):/sms sms-manager
