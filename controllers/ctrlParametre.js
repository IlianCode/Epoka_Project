const modelParametre = require('../models/modelParametre');

module.exports = {
    //afficher accueil
    afficher_parametre: function (req, res) {
        modelParametre.afficher_parametre(function(data){
            res.render('./parametre', {contenu: data})

        })
    },
    ajouter_distanceVille: function(req, res){
        let di_idComDepart = req.body.dstA
        let di_idComArrive = req.body.dstB
        let di_distanceKm = req.body.dstKm 

        let listeVille = { di_distanceKm, di_idComDepart, di_idComArrive}
        modelParametre.ajouter_distanceVille(listeVille, function(data){
            res.redirect('./parametre')
        })
    }

}