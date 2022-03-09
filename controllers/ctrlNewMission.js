const modelNewMission = require('../models/modelNewMission');

module.exports = {
    //afficher accueil
    afficher_newMission: function (req, res) {
        modelNewMission.afficher_newMission(function(data){
            res.render('./newmission', {test: data})

        })
    },

}