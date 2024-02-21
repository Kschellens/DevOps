# DevOps
# Exécuter un serveur web dans un container Docker

## a. Récupérer l'image sur le Docker Hub (Apache)
docker pull httpd

## b. Utiliser une commande pour vérifier que vous disposez bien de l'image en local
docker images

## c. Créer un fichier dans votre repo local ./html/index.html qui contient "Hello World"
echo "Hello World" > C:\Ynov\DevOps\DevOps\TP_DOCKER_1\html\index.html

## d. Démarrer un nouveau container et servir la page HTML créée précédemment à l'aide d'une référence absolue
docker run --name my-apache -v C:/Ynov/DevOps/DevOps/TP_DOCKER_1/html:/usr/local/apache2/htdocs -p 80:80 -d httpd

## e. Supprimer le container
docker stop my-apache
docker rm my-apache

## f. Relancez le même container sans l'option -v puis utilisez la commande cp pour servir votre fichier
docker run --name my-apache -p 80:80 -d httpd
docker cp C:/Ynov/DevOps/DevOps/TP_DOCKER_1/html/index.html my-apache:/usr/local/apache2/htdocs/index.html


## a. Créer un fichier Dockerfile
## Ouvrir un terminal et naviguer vers le répertoire du projet (mon-projet-apache)
## Créer un fichier Dockerfile à la racine du projet (mon-projet-apache)
## Ajouter les instructions suivantes dans le Dockerfile

## Utiliser l'image officielle Apache comme image de base
FROM httpd:latest

## Copier le fichier index.html dans le dossier qui sert les pages web
COPY ./html/index.html /usr/local/apache2/htdocs/index.html

## Exposer le port 80 (facultatif, pour documentation)
EXPOSE 80

# Sauvegarder le Dockerfile

## b. Construire l'image Docker
## Dans le terminal, exécuter la commande suivante pour construire l'image Docker
docker build -t monserveurapache .

## c. Exécuter cette nouvelle image
## Une fois l'image construite, démarrer un conteneur en utilisant cette image
docker run -d -p 80:80 --name mon-conteneur-apache monserveurapache

# TP Docker avec docker-compose

## a. Qu'est-ce que `docker-compose` et pourquoi l'utiliser ?
   La commande `docker-compose` est utilisée pour définir et exécuter des applications multi-conteneurs avec Docker. Au lieu de devoir utiliser plusieurs commandes `docker run` pour démarrer vos conteneurs, vous pouvez les définir tous dans un fichier YAML (par défaut `docker-compose.yml`) et les démarrer avec une seule commande. Cela permet une configuration plus facile et reproductible de vos applications, surtout lorsqu'elles dépendent de plusieurs services.

## b. Quelles sont les commandes pour démarrer et arrêter tous les conteneurs définis dans un fichier Docker Compose ?
   Pour démarrer tous les conteneurs définis dans un fichier Docker Compose, vous utilisez la commande :
   ```
   docker-compose up
   ```
   Pour arrêter tous les conteneurs lancés à l'aide de Docker Compose, vous utilisez la commande :
   ```
   docker-compose down
   ```

## c. Pouvez-vous fournir un exemple de fichier `docker-compose.yml` pour démarrer une base de données (MySQL ou MariaDB) et phpMyAdmin ?
   Voici un exemple de fichier `docker-compose.yml` pour démarrer une base de données (MySQL ou MariaDB) et phpMyAdmin :
   ```yaml
   version: '3.1'

   services:
     db:
       image: mysql
       restart: always
       environment:
         MYSQL_ROOT_PASSWORD: example
       volumes:
         - db_data:/var/lib/mysql

     phpmyadmin:
       image: phpmyadmin/phpmyadmin
       restart: always
       ports:
         - "8080:80"
       environment:
         PMA_HOST: db
         MYSQL_ROOT_PASSWORD: example

   volumes:
     db_data:
   ```
