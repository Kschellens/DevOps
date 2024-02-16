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


# a. Créer un fichier Dockerfile
# Ouvrir un terminal et naviguer vers le répertoire du projet (mon-projet-apache)
# Créer un fichier Dockerfile à la racine du projet (mon-projet-apache)
# Ajouter les instructions suivantes dans le Dockerfile

# Utiliser l'image officielle Apache comme image de base
FROM httpd:latest

# Copier le fichier index.html dans le dossier qui sert les pages web
COPY ./html/index.html /usr/local/apache2/htdocs/index.html

# Exposer le port 80 (facultatif, pour documentation)
EXPOSE 80

# Sauvegarder le Dockerfile

# b. Construire l'image Docker
# Dans le terminal, exécuter la commande suivante pour construire l'image Docker
docker build -t monserveurapache .

# c. Exécuter cette nouvelle image
# Une fois l'image construite, démarrer un conteneur en utilisant cette image
docker run -d -p 80:80 --name mon-conteneur-apache monserveurapache

