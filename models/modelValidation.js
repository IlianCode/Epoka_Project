var db = require('../config/database');
module.exports = {
    afficher_validation: function (callback) {
        var sql = 'SELECT sa_nom, sa_prenom, mi_dateDebut, mi_dateFin, mi_lieuDepart , mi_idcommune, co_nom as lieuMission from mission, salarie, communes WHERE sa_id = mi_idsalarie and mi_idcommune = co_id';
        var sql2 = 'SELECT mi_lieuDepart, co_nom as lieuDepart from mission, salarie, communes WHERE sa_id = mi_idsalarie and mi_lieuDepart = co_id';
        db.query(sql, function (err, data,fields) {
            db.query(sql2, function (err, data2,fields) {
                if (err) throw err;
                return callback(data, data2);
            });
        });

    },
    executer_validation:function(mi_id, callback){
        var sql ="update mission set mi_validee = 1 where mi_id = ?"
        db.query(sql,mi_id, function (err, data,fields) {
            console.log(sql)
            if (err) throw err;
            return callback(data);
        });
    }
}