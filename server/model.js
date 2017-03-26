var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    screenname: { type: String, required: true, unique: true, index: { unique: true } },
    password: { type: String, required: true },
    // passwordConfirmation: { type: String, required: true },
    email: { type: String, required: true }
});

var UserDB= mongoose.model("UserDB", UserSchema);
module.exports = UserDB