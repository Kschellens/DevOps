# DevOps
## Créer un Dockerfile qui permet de lancer une application NodeJS (v18-alpin ou v20) i Cette application utilise le port 3000
docker run --name ma-base-de-donnees -e MYSQL_ROOT_PASSWORD=root -p 3307:3306 -d mysql:latest

## Utilisez docker pour lancer une image de base de données (MySQL ou mariadb)
docker run --name mon-app-node -p 3000:3000 -d mon-app-node

## Adapter les fichiers models/index.js et le db.config.js pour utiliser une base MySQL plutôt que SQLite3

## Rebuildez votre image docker et relancez un conteneur, vérifiez que vous arrivez à utiliser l'app (le code explique comment faire pour utiliser une base MySQL plutôt qu'une base SQLite).