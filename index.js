let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("mysql");

let app = express();
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb', extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
        return res.status(200).json({});
    }
    next();
});

app.use("/users", require("./routes/users"))



app.get("/",(req,res)=>{
  
    res.end("Welcome to nodejs")
})

app.listen(8081, ()=>{
    console.log("Website running on http://localhost:8081");
})