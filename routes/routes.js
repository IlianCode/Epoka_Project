const mysql = require('mysql')
const { Router } = require("express");
const express = require("express");
const routeur = express.Router();


var ctrlconnexion = require("../controllers/ctrlConnexion");
var ctrlNewMission = require("../controllers/ctrlNewMission");

routeur.get("/connexion", ctrlconnexion.afficher_connexion);
routeur.get("/newMission", ctrlNewMission.afficher_newMission);


module.exports = routeur;
