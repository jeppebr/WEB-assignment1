module.exports.logoutCreate = function(req, res) { 
    console.log("Logging the user out")
    // remove the JWT token from local storage
    // TODO get JWT token and end the session with that token.
    
    res
    .status(200)
    .json({"message" : "Logout request received"});
};