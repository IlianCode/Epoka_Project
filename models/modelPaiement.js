var db = require('../config/database');
module.exports = {
    afficher_paiement: function (callback) {
        var sql = 'SELECT * from mission, salarie WHERE sa_id = mi_idsalarie';
        db.query(sql, function (err, data,fields) {
            if (err) throw err;
            return callback(data);
        });

    },
    executer_paiement: function(mi_id,callback){
        var sql ="update mission set mi_payee = 1 where mi_id = ?"

        db.query(sql,mi_id, function(err, data, fields){
            if(err)throw err;
            return callback(data);
        })
    }
}