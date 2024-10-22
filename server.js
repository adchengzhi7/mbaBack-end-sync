
const {login} =require("./routes/user.controller.js")
const router = require("express").Router();

console.log(login);

const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('ok')
})
router.post("/login",login,(req,res)=>{
    res.send('ok');
    console.log(login);
});

app.listen('3001',()=>{
    console.log("connected");
})
module.exports =router;