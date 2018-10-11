module.exports.logoutCreate = function(req, res) { 
    console.log("Logging the user out")
    // remove the JWT token from local storage
    
    res
    .status(200)
    .json({"message" : "Logout request received"});
};