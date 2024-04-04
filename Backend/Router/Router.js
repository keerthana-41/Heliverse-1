let express = require("express");
let router = express.Router();

let LocalUser = require('./Users/Methods');

router.use('/User', LocalUser);



module.exports = router;