const jwt = require('jsonwebtoken')
module.exports.sign = function (id, callback) {
    let payload = {subject: id}
    let token = jwt.sign(payload, 'secret')
    callback(token)
}

module.exports.verify = function(token, callback) {
    token = token.substr(1);
    token = token.slice(0, -1);
    jwt.verify(token,'secret', function(err, decoded) {
        if(err){
            console.log("jwt error")
            callback(decoded, err)
        } else {
            console.log("decoded", decoded)
            callback(decoded, err)
        }
    });
}

module.exports.verifyToken = function (req) {
    let authToken = req.headers.authorization;
    if (!authToken) {
        return false;
    }

    let token = authToken.split(' ')[1] // token without Bearer

    if (token === undefined){
        return false;
    } else {
        let result = false;
        this.verify(token, (payload, err) => {
            if (!err){
                result = true;
            }
        })
        return result;
    }
}
