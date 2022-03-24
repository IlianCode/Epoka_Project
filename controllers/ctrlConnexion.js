const modelConnexion = require('../models/modelConnexion');

module.exports = {
    //afficher accueil
    afficher_connexion: function (req, res) {
        modelConnexion.afficher_connexion(function(data){
            res.render('./connexion', {test: data})

        })
    },
    executer_connexion: function(req,res){
        var sa_id = req.body.txtUtilisateur 
        var sa_mdp =  req.body.txtMdp
        
        modelConnexion.executer_connexion([sa_id, sa_mdp],function(data){
            console.log(data)
            if (data != []){
                req.session.connect = data[0]
            }
            res.redirect('../validation')
        })
    }
}