const modelApi = require('../models/modelApi');

const testConnexion = async (req, res) => {

    // Prelevé dans l'URL
    let sa_id = req.params.sa_id;
    let sa_mdp = req.params.sa_mdp;
    //
    
    await modelApi.testConnexion(sa_id, sa_mdp)
    .then((data) => {
        let err = false;
        console.log(data)
        res.json(data)
    }).catch((err) => {
        console.log(err)
        res.json(err)
    })
}
//recuperer la liste des communes 
const getCommunes =async (req, res) => {

 
    await modelApi.recupCommunes()
    .then((data) => {
        let err = false;
        console.log(data)
        res.json(data)
    }).catch((err) => {
        console.log(err)
        res.json(err)
    })
}
//ajouter une mission
const ajouterMission = async (req, res) => {
    
        // Prelevé dans l'URL
        let mi_dateDebut = req.params.mi_dateDebut;
        let mi_dateFin = req.params.mi_dateFin;
        let mi_validee = req.params.mi_validee;
        let mi_payee = req.params.mi_payee;
        let mi_idsalarie = req.params.mi_idsalarie;
        let mi_idcommunne = req.params.mi_idcommunne;
        let mi_lieuDepart = req.params.mi_lieuDepart;
        //
        
        await modelApi.ajouterMission(mi_dateDebut, mi_dateFin, mi_validee, mi_payee, mi_idsalarie, mi_idcommunne, mi_lieuDepart)
        .then((data) => {
            let err = false;
            console.log(data)
            res.json(data)
        }).catch((err) => {
            console.log(err)
            res.json(err)
        })
}
module.exports = {
    
    testConnexion,
    getCommunes,
    ajouterMission
}