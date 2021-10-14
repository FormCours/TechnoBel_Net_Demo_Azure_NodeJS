// Chargement des fichiers .env
require('dotenv').config()

// Ajout des dépendences
const express = require('express');

// Création du serveur
const app = express();

// Middleware de debug
app.use((req, res, next) => {
    console.log(req);
    next();
});

// Ajoute d'une route de demo 
app.get('/api/demo', (req, res) => {
    res.json({
        message: 'Hello World !'
    });
});

app.get('/api/config', (req, res) => {
    res.json(process.env);
});

// Demarrage
app.listen(process.env.PORT, () => {
    console.log(`Le serveur tourne sur le port ${process.env.PORT}`);
});