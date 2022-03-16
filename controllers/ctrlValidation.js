const modelValidation = require('../models/modelValidation');

module.exports = {
    //afficher accueil
    afficher_validation: function (req, res) {
        modelValidation.afficher_validation(function(data){
            res.render('./validation', {contenu: data})

        })
    },

}