const modelParametre = require('../models/modelParametre');

module.exports = {
    //afficher accueil
    afficher_parametre: function (req, res) {
        modelParametre.afficher_parametre(function(data){
            res.render('./parametre', {test: data})

        })
    },

}