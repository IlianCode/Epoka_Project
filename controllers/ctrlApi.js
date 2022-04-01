const modelApi = require('../models/modelApi');

const testConnexion = async (req, res) => {

    // Prelevé dans l'URL
    let sa_id = req.params.sa_id;
    let sa_mdp = req.params.sa_mdp;
    //
    
    await modelApi.testConnexion(sa_id, sa_mdp)
    .then((data) => {
        let err = false;
        console.log(data)
        res.json(data)
    }).catch((err) => {
        console.log(err)
        res.json(err)
    })
}
module.exports = {
    
    testConnexion
}