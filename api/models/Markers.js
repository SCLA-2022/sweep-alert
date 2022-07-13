const mongoose = require("mongoose");

const MarkerSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model("Marker", MarkerSchema);