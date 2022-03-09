var db = require('../config/database');
module.exports = {
    afficher_connexion: function (callback) {
        var sql = 'SELECT * FROM salarie';
        db.query(sql, function (err, data,fields) {
            if (err) throw err;
            return callback(data);
        });

    }
}