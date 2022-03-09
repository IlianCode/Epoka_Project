var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '',  
    database: 'epoka' 
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('bdd  connecté avec succès !');
});
module.exports = conn;