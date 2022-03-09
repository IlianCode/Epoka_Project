const mysql = require('mysql')
const { Router } = require("express");
const express = require("express");
const routeur = express.Router();


const ctrlconnexion = require("../controllers/ctrlConnexion");
const ctrlNewMission = require("../controllers/ctrlNewMission");
const ctrlValidation = require('../controllers/ctrlValidation');
const ctrlPaiement = require('../controllers/ctrlPaiement');
const ctrlParametre = require('../controllers/ctrlParametre');

routeur.get("/connexion", ctrlconnexion.afficher_connexion);
routeur.get("/newMission", ctrlNewMission.afficher_newMission);
routeur.get("/validation", ctrlValidation.afficher_validation);
routeur.get("/paiement", ctrlPaiement.afficher_paiement);
routeur.get("/parametre", ctrlParametre.afficher_parametre);


module.exports = routeur;
