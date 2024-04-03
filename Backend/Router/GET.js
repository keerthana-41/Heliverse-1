let express = require("express");
let router = express.Router();


router.get('/', (req, res) => {
    res.json({"LocalBody":"Hello"});
});



module.exports = router;