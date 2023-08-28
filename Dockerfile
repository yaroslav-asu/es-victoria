FROM node as build
WORKDIR /home/es
COPY package*.json ./

RUN npm i -g @quasar/cli
RUN npm init quasar
RUN npm install

COPY . ./
RUN quasar build

FROM steebchen/nginx-spa:stable
COPY --from=build /home/es/dist/spa /app
COPY --from=build /home/es/dist/spa/ /home/es/dist/
