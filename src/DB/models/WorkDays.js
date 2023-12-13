const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const WorkDaysCreate = new Schema ({
    days: {
        type: String,
        required: false
    },
    /* hairstylist: {
        type: String,
        required: true
    }, */
    time: {
        type: Array,
        required: true
    }
},{
    timestamps: true
});

const WorkDays = model('WorkDays', WorkDaysCreate);

module.exports = WorkDays;

