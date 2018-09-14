var mongoose = require('mongoose');
const config = require('../../config');

let dbHost = config.dbHost;
let dbUser = config.dbUser;
let dbPass = config.dbPass;
let dbPort = config.dbPort;
let dbName = config.dbName;

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`, {useNewUrlParser: true});

