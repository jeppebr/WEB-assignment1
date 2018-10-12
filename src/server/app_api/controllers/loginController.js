
const jwt = require('jsonwebtoken')


module.exports.loginCreate = function(req, res) { 
    // console.log(req.query.password)
    // console.log(req.query.userName)
    console.log("logging in the user ")
    console.log(req.body)
    
    console.log(req.body.username)
    console.log(req.body.password)
    let username = req.body.username
    // check if the username and password is in the DB 
    // if yes give them a JWT and show a logout button 

    // on succesfull login 

    let payload = { subject: username }
    let token = jwt.sign(payload, 'secretkeythatisverylongandanoying')
    res.status(200).send({token})
};