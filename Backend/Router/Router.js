let express = require("express");
let router = express.Router();

let LocalPost = require('./POST');
let LocalGet = require('./GET');

router.use('/POST', LocalPost);
router.use('/GET', LocalGet);



module.exports = router;