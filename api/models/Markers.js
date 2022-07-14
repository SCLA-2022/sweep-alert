const mongoose = require("mongoose");

const MarkerSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    lat:{
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    }
},{timestamps: true});

module.exports = mongoose.model("Marker", MarkerSchema);