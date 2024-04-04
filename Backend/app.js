let express = require("express");
let app = express();
let PORT = 8000;
let cors = require('cors');
let bodyparser = require("body-parser");
let Router = require("./Router/Router");
let DotEnv = require("dotenv")
let mongoose = require("mongoose");

app.use(cors());
app.use(bodyparser.json());
DotEnv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Mongoose connected successfully "))
.catch((error)=>console.log(error))




app.use('/Api', Router);

app.get('/', (req, res) => {
    res.send("Hello world")
});


app.listen(PORT, () => console.log(`server run on Port http://localhost:${PORT}`))