const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const exSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
    }

}, {
    timestamps: true,
});


const Ex = mongoose.model("User", exSchema);

module.exports = Ex