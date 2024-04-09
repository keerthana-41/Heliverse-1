let mongoose = require("mongoose");

let UsersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // Using a regex to validate email format
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true,
        // For production, you would want to hash passwords before storing them
        // For example, using bcrypt: https://www.npmjs.com/package/bcrypt
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'other'],
        required: true
    }

});

let Users = mongoose.model('Users', UsersSchema);

module.exports = Users;