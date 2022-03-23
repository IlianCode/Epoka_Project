const modelValidation = require('../models/modelValidation');

module.exports = {
    //afficher accueil
    afficher_validation: function (req, res) {
        modelValidation.afficher_validation(function(data){
            if( req.session.connect == undefined ){
                console.log("test")
                 res.redirect('./connexion')
            }else {
                res.render('./validation', {contenu: data})
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