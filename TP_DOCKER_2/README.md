# DevOps
## 2 Créer un Dockerfile qui permet de lancer une application NodeJS (v18-alpin ou v20) i Cette application utilise le port 3000
docker run --name ma-base-de-donnees -e MYSQL_ROOT_PASSWORD=root -p 3307:3306 -d mysql:latest

## 3 Utilisez docker pour lancer une image de base de données (MySQL ou mariadb)
docker run --name mon-app-node -p 3000:3000 -d mon-app-node

## 4 Adapter les fichiers models/index.js et le db.config.js pour utiliser une base MySQL plutôt que SQLite3

// Uncomment this block to use Mysql, don't forget to adapt db.config.js
const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
        host: dbConfig.hostname,
        port: dbConfig.port,
        dialect: "mysql"
});

module.exports = {
    hostname: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    dialect: "mysql"
};

## 4 Rebuildez votre image docker et relancez un conteneur, vérifiez que vous arrivez à utiliser l'app.

docker-compose up -d --build

## Créer un docker-compose.yml pour avoir 2 services (node et db) node doit se baser sur le build (votre Dockerfile) db doit se baser sur une image mariadb ou mysql

version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db
      - DB_USER=root
      - DB_PASS=root
      - DB_NAME=maBaseDeDonnees
      - DB_PORT=3306
    depends_on:
      - db

  db:
    image: mysql:latest
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=maBaseDeDonnees
      - MYSQL_USER=root
      - MYSQL_PASSWORD=root
    volumes:
      - db_data:/var/lib/mysql
    ports:
      - "3307:3306"

volumes:
  db_data:

## 6 Adapter docker-compose.yml pour l'utilisation de la base de données conteneurisée
