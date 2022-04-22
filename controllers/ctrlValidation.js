const modelValidation = require('../models/modelValidation');

module.exports = {
    //afficher accueil
    afficher_validation: function (req, res) {
        modelValidation.afficher_validation(function(data, data2){
            if( req.session.connect == undefined || req.session.connect.sa_isSubordonne == 1 ){
                 res.redirect('./connexion')
            }else{
                res.render('./validation', {contenu: data, contenubis: data2})
            }
        })
    },
    executer_validation: function(req, res){
        let mi_id = req.params.id

        modelValidation.executer_validation(mi_id,function(data){
            res.redirect('../../validation')
        })
    }

}