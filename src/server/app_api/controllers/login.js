
module.exports.loginCreate = function(req, res) { 
    console.log(req.body)

    res
    .status(200)
    .json({"message" : "Login request received"});
};