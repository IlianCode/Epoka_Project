const modelPaiement = require('../models/modelPaiement');

module.exports = {
    //afficher accueil
    afficher_paiement: function (req, res) {
        modelPaiement.afficher_paiement(function(data, data2){
            if( req.session.connect == undefined ){
                 res.redirect('./connexion')
            }else {
                res.render('./paiement', {contenu: data, contenu2:data2})

            }

        })
    },
    executer_paiement: function(req,res){
        let mi_id = req.params.id

        modelPaiement.executer_paiement(mi_id, function(data){
            res.redirect('../../paiement')

        })
    }

}