FROM node:latest
COPY . .
RUN npm install
EXPOSE 5500
CMD [ "node","index.js" ]











# INSTRUCTION args
FROM alpine:3.18
RUN apk add curl
WORKDIR /downloads

RUN adduser -D simran
USER simran

ENV app_host ="0.0.0.0"
ENV app_port=5000 \
 ABC=XYz
