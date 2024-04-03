let express = require("express");
let app = express();
let PORT = 8000;
let cors = require('cors');
let bodyparser = require("body-parser");
let Router = require("./Router/Router");

app.use(cors());
app.use(bodyparser.json());
app.use('/Router', Router);

app.get('/', (req, res) => {
    res.send("Hello world")
});


app.listen(PORT, () => console.log(`server run on Port http://localhost:${PORT}`))