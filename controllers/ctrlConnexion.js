const modelConnexion = require('../models/modelConnexion');

module.exports = {
    //afficher accueil
    afficher_connexion: function (req, res) {
        modelConnexion.afficher_connexion(function(data){
            res.render('./connexion', {test: data})

        })
    },
    executer_connexion: function(req,res){
        var user = req.body.txtUtilisateur 
        var mdp =  req.body.txtMdp
        
        modelConnexion.executer_connexion(function(data){
            console.log(data);
            console.log(user)
            console.log(mdp)
            for (i=0; i<data.length;i++){
                if (data[i].sa_nom == user){
                    if (data[i].sa_mdp == mdp){
                        console.log("CONNECTER")
                    }
                }
                
            }
            res.redirect('./connexion')
        })
    }
}