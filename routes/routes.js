const express = require("express");
const routeur = express.Router();

var ctrlAccueil = require("../controllers/ctrlAccueil");

routeur.get("/", ctrlAccueil.afficher_accueil);

module.exports = routeur;
