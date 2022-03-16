var db = require('../config/database');
module.exports = {
    afficher_validation: function (callback) {
        var sql = 'SELECT * from mission, salarie WHERE sa_id = mi_idsalarie';
        db.query(sql, function (err, data,fields) {
            if (err) throw err;
            return callback(data);
        });

    }
}