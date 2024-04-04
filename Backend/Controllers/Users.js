const User = require('../Module/Users');

// Create
let LocalUserFunc = async (req, res) => {
    console.log("POST:");
    try {
        const newUser = await User.create(req.body);
        console.log("newUser:",newUser);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { LocalUserFunc };
