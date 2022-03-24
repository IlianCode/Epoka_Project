var db = require('../config/database');
module.exports = {
    afficher_parametre: function (callback) {
        var sql = 'SELECT * FROM distance';
        var sql2 = 'SELECT * FROM communes';
        var sql3 = 'SELECT * FROM parametre'

        db.query(sql, function (err, data,fields) {
            db.query(sql2, function (err, data2,fields) {
                db.query(sql3, function (err, data3,fields) {
                    if (err) throw err;
                    return callback(data, data2, data3);
                });
            });
        });

    },
    recup_idVille: function([co_nom, co_nom2], callback){
        var sql2 = 'SELECT co_id FROM communes WHERE co_nom = ?'
        db.query(sql2, co_nom, function (err, data,fields) {
            db.query(sql2, co_nom2, function (err, data2,fields) {
                console.log(sql2)
                return callback(data, data2)
            });
        });
    },
    ajouter_distanceVille:function([di_distanceKm,di_idComDepart,di_idComArrive], callback){
        var sql = 'insert into distance (di_distanceKm, di_idComDepart,di_idComArrive) values ( ?, ?, ?) ';
        
        db.query(sql, [di_distanceKm,di_idComDepart,di_idComArrive], function (err, data,fields) {
            if (err) throw err;
            return callback(data)
        });
    },
    modifier_taux:function([forfaitJ, tauxKm], callback){
        var sql = 'Update parametre set forfaitJ = ? , tauxKm = ? ';
        
        db.query(sql, [forfaitJ, tauxKm], function (err, data,fields) {
            if (err) throw err;
            return callback(data)
        });
    },
}