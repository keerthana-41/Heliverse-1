let express = require("express");
let router = express.Router();


router.post('/', (req, res) => {
    let LocalBody = req.body;

    res.json(LocalBody);
});



module.exports = router;