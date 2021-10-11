const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema ({
    name: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String, // I assume this will be the file name.
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
        required: false
    },
    description: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner; 