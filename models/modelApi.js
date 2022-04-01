var db = require('../config/database');

const testConnexion = async(sa_id,sa_mdp)=>{
    return new Promise((resolve, reject) => {
        var sql = 'SELECT * FROM salarie where sa_id= ? and sa_mdp = ?';

        db.query(sql,[sa_id,sa_mdp], function(err, data,fields){
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
    testConnexion
}


