const mysql = require('mysql')
const express = require("express");
const routeur = express.Router();


const ctrlconnexion = require("../controllers/ctrlConnexion");
const ctrlValidation = require('../controllers/ctrlValidation');
const ctrlPaiement = require('../controllers/ctrlPaiement');
const ctrlParametre = require('../controllers/ctrlParametre');

routeur.get("/connexion", ctrlconnexion.afficher_connexion)
    .post("/connexion", ctrlconnexion.executer_connexion);
routeur.get("/validation", ctrlValidation.afficher_validation)
    .post("/validation/modifEtatMission/:id", ctrlValidation.executer_validation);
routeur.get("/paiement", ctrlPaiement.afficher_paiement)
    .post("/paiement/modifEtatMissionPaiement/:id", ctrlPaiement.executer_paiement);

routeur.get("/parametre", ctrlParametre.afficher_parametre)
    .post("/parametre", ctrlParametre.ajouter_distanceVille)
    .post("/parametre/modifTaux", ctrlParametre.modifier_taux);


module.exports = routeur;
