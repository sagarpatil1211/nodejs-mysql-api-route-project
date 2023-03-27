let express = require("express");
let bodyparser = require("body-parser");
let app = express();
let User = require("../models/User");
const { resolve } = require("path");

app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true}))
app.use(express.json());

let router = express.Router();

router.post("/", (req,res)=>{
    let body = req.body;
    // console.log(body);
    let object = new User();
    object.name = body.name;
    object.email = body.email;
    object.mobileno = body.mobileno;

    object.post().then(result=>{
        res.end(JSON.stringify({status : "success", data : result}))
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}))

    })
})

router.put("/:id", (req,res)=>{
    let body = req.body;
    // console.log(body);
    let object = new User();
    object.id = req.params.id ;
    object.name = body.name;
    object.email = body.email;
    object.mobileno = body.mobileno;

    object.post().then(result=>{
        res.end(JSON.stringify({status : "success", data : result}))
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}))

    })
})

router.get("/", (req,res)=>{
    let object = new User();
    object.list().then(result=>{
        res.end(JSON.stringify({status : "success", data : result}))
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}))
    })
})

router.get("/:id", (req,res)=>{
    let object = new User();
    object.id = req.params.id;
    object.get().then(result=>{
        if(result.length > 0){
        res.end(JSON.stringify({status : "success", data : result[0]}))
        }
        else{
        res.end(JSON.stringify({status : "failed", data : "Record not found" }))

        }    
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}))
    })
})

router.delete("/:id", (req,res)=>{
    let object = new User();
    object.id = req.params.id;
    object.delete().then(result=>{
        res.end(JSON.stringify({status : "success", data : result}))
    }).catch(err=>{
        res.end(JSON.stringify({status : "failed", data : err}))
    })
})

module.exports = router ;