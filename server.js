// Chargement des fichiers .env
require('dotenv').config()

// Ajout des dépendences
const express = require('express');

// Création du serveur
const app = express();



// Demarrage
app.listen(process.env.PORT, () => {
    console.log(`Le serveur tourne sur le port ${process.env.PORT}`);
});