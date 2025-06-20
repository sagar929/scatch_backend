const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-models");
const ownerModels = require('../models/owner-models');


if(process.env.NODE_ENV ==="development") {
router.post("/create", async function(req,res){
    let oweners = await ownerModel.find();
    if(ownerModels.length > 0) {
         return res
    .send(503)
    .send("You dont have permission to create more owners");
    }

    let { fullname, email, password, gstin } = req.body;
   let createdOwner =  await ownerModel.create({
        fullname,
        email,
        password,
        // gstin,
    })
    res.status(201).send(createdOwner)
})

}    


router.get('/',function(req,res){
    res.send("hey its woring");
})


// console.log(process.env.NODE_ENV);





module.exports =  router;