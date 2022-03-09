const modelConnexion = require('../models/modelConnexion');

module.exports = {
    //afficher accueil
    afficher_connexion: function (req, res) {
        modelConnexion.afficher_connexion(function(data){
            res.render('./connexion', {test: data})

        })
    },

}