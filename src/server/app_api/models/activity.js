var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    exercise: { type: Schema.Types.ObjectId, ref: 'Exercise' },
})

module.exports = activitySchema;
