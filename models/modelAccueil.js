//var db = require('../config/database');
module.exports = {
    afficher_accueil: function (callback) {
        var sql = 'SELECT * FROM Clients';
        db.query(sql, function (err, data) {
            if (err) throw err;
            return callback(data);
        });
    }
}