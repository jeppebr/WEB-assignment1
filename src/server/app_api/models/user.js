var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require("crypto");

var userSchema = new Schema({
    username: String,
    password: String,
    salt: String
},
{ versionKey: '_version1.0' }
);

const iterations= 90000;
const keylen= 32;
const saltBytes= 16;
const digest= 'sha512';

 userSchema.methods.setPassword = function(clearPassword){
    this.salt = crypto.randomBytes(saltBytes).toString('hex');
    this.password = crypto.pbkdf2Sync(clearPassword, this.salt, iterations, keylen,
        digest).toString('hex');
};

module.exports = mongoose.model('user', userSchema);

 userSchema.methods.validPassword= function(password) {
    lethash= crypto.pbkdf2Sync(password, this.salt, iterations, keylen,digest)
    .toString('hex');
    return this.hash=== hash;
};
 



