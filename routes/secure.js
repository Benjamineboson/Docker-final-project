const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = "astra"

router.post('/login',(req,res)=>{
    const creds = {
        username: "Ben",
        password: "1234"
    } 
    if (req.body.username === creds.username.trim() && req.body.password === creds.password.trim()){
        res.status(200)
        .json({status: 'success',token: jwt.sign({name: "Ben", favColor: "Green"},secret),redirect: 'wishlist'})
    }else{
        res.status(403)
        .json({status: 'failure'})
    }
})



module.exports = router;