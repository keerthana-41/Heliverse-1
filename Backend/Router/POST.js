let express = require("express");
let router = express.Router();
let LocalPost = require("../Controllers/Users")


router.post('/', LocalPost.LocalUserFunc);



module.exports = router;