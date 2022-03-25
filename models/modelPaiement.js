var db = require('../config/database');
module.exports = {
    afficher_paiement: function (callback) {
        var sql = 'SELECT * from mission, salarie WHERE sa_id = mi_idsalarie';
        var sql2 = "SELECT (di_distanceKm*tauxKm)+(mi_dateFin-mi_dateDebut)*forfaitJ AS prixtotal FROM distance,mission,parametre WHERE mi_lieuDepart = di_idComDepart"
        db.query(sql, function (err, data,fields) {
            db.query(sql2, function (err, data2,fields) {
                if (err) throw err;
                return callback(data, data2);
            });
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