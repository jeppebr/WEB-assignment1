
module.exports.loginCreate = function(req, res) { 
    console.log(req.url)
    console.log("hello")
    res.redirect('http://localhost:4200/')
    // res
    // .status(200)
    // .json({"message" : "Login request received"});
};