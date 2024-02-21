# Utilisez l'image officielle Node.js v18 ou v20 en version alpine
FROM node:18-alpine

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json (s'il existe) dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier les fichiers et répertoires restants dans le répertoire de travail
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Exécuter la commande pour démarrer l'application Node.js
CMD ["node", "server.js"]
