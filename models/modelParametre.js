var db = require('../config/database');
module.exports = {
    afficher_parametre: function (callback) {
        var sql = 'SELECT * FROM distance';
        db.query(sql, function (err, data,fields) {
            if (err) throw err;
            return callback(data);
        });

    },
    ajouter_distanceVille: function(listeVille, callback){
        var sql = 'insert into distance set ? ';
        db.query(sql, listeVille, function (err, data,fields) {
            if (err) throw err;
            return callback(data);
        });
    }
}