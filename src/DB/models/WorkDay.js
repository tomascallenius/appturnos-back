const { Schema, model } = require('mongoose');

const WorkDaysCreate = new Schema({
    date: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    time: {
        type: Array,
        required: true
    },
    services: {
        type: Object,
        required: true
    }
}, {
    timestamps: true,
});

const WorkDay = model('WorkDay', WorkDaysCreate); // este nombre solo sirve para referirme al modelo (WorkDays)

module.exports = WorkDay;
