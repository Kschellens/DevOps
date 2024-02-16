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
