const modelPaiement = require('../models/modelPaiement');

module.exports = {
    //afficher accueil
    afficher_paiement: function (req, res) {
        modelPaiement.afficher_paiement(function(data, data2){
            if( req.session.connect == undefined || req.session.connect.sa_isCompta != 1 ){
                 res.redirect('./connexion')
            }
         

           
            modelPaiement.recup_idMissionSansDistance(function(data3){
                console.log("data 3 :")
                console.log(data3)
                res.render('./paiement', {contenu: data, contenu2:data2, contenu3: data3})
            })
        })
        
    },
    executer_paiement: function(req,res){
        let mi_id = req.params.id

        modelPaiement.executer_paiement(mi_id, function(data){
            res.redirect('../../paiement')

        })
    }

}