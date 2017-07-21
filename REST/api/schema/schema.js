var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ruleSchema = new Schema(
{
    status: {
        type: String,
        enum: ['ACTIVE','PENDING','STOPPED']
    },
    description: {
        type: String
    },
    startTime: {
        type: String
    },
    scheduledTime: {
        type: Date
    },
    scheduleInterval: {
        type: Number
    },
    executionTimes: {
        type: Date
    },
    requestTypes: {
        type: String,
        enum: ['ADD','EDIT','REMOVE','EXECUTE']
    },
    action: {
        type: String
    },
    parentAppId: {
        type: String
    },
    ruleStatus: {
        type: String,
        enum: ['ACTIVE','PENDING','STOPPED']
    },
    endTime: {
        type: String
    },
    type: {
        type: String,
        enum: ['TRIGGERED','MANUEL','SCHEDULED']
    },
    deviceId: {
        type: String
    },
    condition: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('Rules', ruleSchema);
