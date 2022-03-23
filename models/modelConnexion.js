var db = require('../config/database');
module.exports = {
    afficher_connexion: function (callback) {
        var sql = 'SELECT * FROM salarie';
        db.query(sql, function (err, data,fields) {
            if (err) throw err;
            return callback(data);
        });

    },
    executer_connexion: function([sa_id, sa_mdp],callback){
       
        var sql = 'SELECT * FROM salarie where sa_id= ? and sa_mdp = ?';
        db.query(sql,[sa_id, sa_mdp], function (err, data) {
            if (err) throw err;
            return callback(data);
        });

    }
}