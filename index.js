// inclure les dépendances et middlewares
const express = require("express");

// activer les dépendances
let app = express();
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.use(express.static("views"));


app.listen(3000, () => console.log("Le serveur est actif !"));
app.use("/", (Routeur = require("./routes/routes")));