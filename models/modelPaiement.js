var db = require('../config/database');
module.exports = {
    recup_idMissionSansDistance: function (callback) {
        
        var sql = 'SELECT * from mission, salarie WHERE  mi_id NOT IN (SELECT mi_id from mission, distance,salarie WHERE sa_id = mi_idsalarie AND ((mi_lieuDepart = di_idComDepart AND mi_idcommune = di_idComArrive) OR (mi_lieuDepart = di_idComArrive AND mi_idcommune = di_idComDepart))) and sa_id = mi_idsalarie ';
        db.query(sql, function (err, data3,fields) {
            
                if (err) throw err;
                return callback(data3);
        });

    },

    afficher_paiement: function (callback) {
        
        /*var sql3 = 'select * from mission, distance where (mi_lieuDepart = di_idComDepart AND mi_idcommune = di_idComArrive) OR (mi_lieuDepart = di_idComArrive AND mi_idcommune = di_idComDepart) ORDER BY mi_id'
        db.query(sql3, function (err, data3,fields) {
            if (err) throw err;
            return callback(data3);
        });*/
       // var sql = 'SELECT * from mission, salarie WHERE sa_id = mi_idsalarie';
       var sql = "SELECT * from mission, distance,salarie WHERE sa_id = mi_idsalarie AND ((mi_lieuDepart = di_idComDepart AND mi_idcommune = di_idComArrive) OR (mi_lieuDepart = di_idComArrive AND mi_idcommune = di_idComDepart))       "
        var sql2 = "SELECT (di_distanceKm*tauxKm)+((mi_dateFin-mi_dateDebut)*forfaitJ) AS prixtotal FROM distance,mission,parametre WHERE (mi_lieuDepart = di_idComDepart AND mi_idcommune = di_idComArrive) OR (mi_lieuDepart = di_idComArrive AND mi_idcommune = di_idComDepart)"
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


