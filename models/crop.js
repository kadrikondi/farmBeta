const mongoose = require("mongoose")
searchPlugin = require('mongoose-search-plugin');
const Schema = mongoose.Schema

const cropSchema = new Schema({

    cropname: {
        type: String,
        // required:true
    },

    location: {
        type: String
    },
    soiltype: {
        type: String
    },
    area: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now

    }


})


module.exports = mongoose.model('crop', cropSchema);