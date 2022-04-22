var db = require('../config/database');

const testConnexion = async(sa_id,sa_mdp)=>{
    return new Promise((resolve, reject) => {
        var sql = 'SELECT * FROM salarie,agence where sa_id= ? and sa_mdp = ? and sa_idagence = ag_id';

        db.query(sql,[sa_id,sa_mdp], function(err, data,fields){
            if(err || data.length == 0){
                console.log(err)
                reject("nop")
            }else{
                resolve(data)
            }
                
        })
    })    
}
const recupCommunes = async()=>{
    return new Promise((resolve, reject) => {
        var sql = 'SELECT * FROM communes';

        db.query(sql, function(err, data,fields){
            if(err || data.length == 0){
                console.log(err)
                reject("Aucune Notes trouvé !")
            }else{
                resolve(data)
            }
                
        })
    })    
}
const ajouterMission = async(mi_dateDebut,mi_dateFin,mi_validee,mi_payee,mi_idsalarie,mi_idcommune,mi_lieuDepart)=>{
    return new Promise((resolve, reject) => {
        var sql = 'INSERT INTO mission (mi_dateDebut,mi_dateFin,mi_validee,mi_payee,mi_idsalarie,mi_idcommune,mi_lieuDepart) VALUES (?,?,?,?,?,?,?)';

        db.query(sql,[mi_dateDebut,mi_dateFin,mi_validee,mi_payee,mi_idsalarie,mi_idcommune,mi_lieuDepart], function(err, data,fields){
            if(err || data.length == 0){
                console.log(err)
                reject("Aucune Notes trouvé !")
            }else{
                resolve(data)
            }
                
        })
    })    
}


module.exports = {
    testConnexion,
    recupCommunes,
    ajouterMission
}


