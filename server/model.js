var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// makes sure all usernames are lower case so its easier
// to compare for log in and unique username
function toLower(str) {
    return str.toLowerCase();
}

var UserSchema = new Schema({
    screenname: { type: String, required: true, unique: true, set: toLower, index: { unique: true } },
    password: { type: String, required: true },
    email: { type: String, required: true }
});

var UserDB = mongoose.model("UserDB", UserSchema);
module.exports = UserDB