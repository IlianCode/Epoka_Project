const modelParametre = require('../models/modelParametre');

module.exports = {
    //afficher accueil
    afficher_parametre: function (req, res) {
        modelParametre.afficher_parametre(function(data, data2){

            if( req.session.connect == undefined ){
                 res.redirect('./connexion')
            }else {
                res.render('./parametre', {contenu: data, contenu2: data2})
            }
        })
    },
    ajouter_distanceVille: function(req, res){
        let co_nom = req.body.communes
        let co_nom2 = req.body.communes2
        let di_distanceKm = req.body.dstKm 
        if(di_distanceKm ==""){di_distanceKm = "Distance non définie, merci d'ajouter une distance"}
      
        console.log("--")
        console.log(co_nom)
        console.log(co_nom2)
        console.log('---')

        modelParametre.recup_idVille([co_nom, co_nom2], function(data, data2){
            console.log(data, data2)
            let di_idComDepart = data[0].co_id
            let di_idComArrive = data2[0].co_id
            modelParametre.ajouter_distanceVille([di_distanceKm,di_idComDepart,di_idComArrive], function(data){
                console.log(data)
                res.redirect('./parametre')
            })
        })
       
    }

}