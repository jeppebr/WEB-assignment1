var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = scheduleSchema;