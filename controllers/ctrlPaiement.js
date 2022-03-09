const modelPaiement = require('../models/modelPaiement');

module.exports = {
    //afficher accueil
    afficher_paiement: function (req, res) {
        modelPaiement.afficher_paiement(function(data){
            res.render('./paiement', {test: data})

        })
    },

}