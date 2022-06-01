// inclure les dépendances et middlewares
const express = require("express");
const Routeur = require('./routes/routes')
//ajout de session
const session = require('express-session')
// activer les dépendances
let app = express();
app.use(session({secret: 'test', saveUninitialized: false,resave: false}));
app.use(express.json());
const iniparser = require('iniparser')
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("views"));

app.use("/js" , express.static(__dirname + "/assets/"));


app.listen(3000, () => console.log("Le serveur est actif !"));

//=====================

var sess;
app.use(function (req, res, next) {
    sess =  req.session.connect
    next();
 });


app.get('/', (req, res) => {
    if(sess ==undefined){
        return res.redirect('/connexion')
    }
    res.send('Le serveur epoka est actif')
})

app.use("/", Routeur);
