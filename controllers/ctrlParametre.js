const modelParametre = require('../models/modelParametre');

module.exports = {
    //afficher accueil
    afficher_parametre: function (req, res) {
        modelParametre.afficher_parametre(function(data, data2, data3){

            if( req.session.connect == undefined || req.session.connect.sa_isCompta != 0 ){
                 res.redirect('./connexion')
            }else {
                console.log(data3)
                res.render('./parametre', {contenu: data, contenu2: data2, contenu3: data3})
            }
        })
    },
    ajouter_distanceVille: function(req, res){
        let co_nom = req.body.communes
        let co_nom2 = req.body.communes2
        let di_distanceKm = req.body.dstKm 
        //check si ya des letter dans une variable (utilisé pour la securisation des entrées)
        function containsAnyLetter(str) {
            return /[a-zA-Z]/.test(str);
          }
        //secu des entrées
        console.log(containsAnyLetter(di_distanceKm))
        if(di_distanceKm =="" || di_distanceKm == 0 || co_nom == co_nom2 || containsAnyLetter(di_distanceKm)== true){
            res.redirect('./parametre') 
            return
        }
      

        modelParametre.recup_idVille([co_nom, co_nom2], function(data, data2){
            let di_idComDepart = data[0].co_id
            let di_idComArrive = data2[0].co_id
            modelParametre.ajouter_distanceVille([di_distanceKm,di_idComDepart,di_idComArrive], function(data){
                res.redirect('./parametre')
            })
        })
       
    },

    modifier_taux:function(req, res){
        let tauxKm = req.body.rbtKm
        let forfaitJ = req.body.rbtJour

       
            modelParametre.modifier_taux([forfaitJ, tauxKm], function(data){
                res.redirect('../../parametre')
            })
       
    }

}