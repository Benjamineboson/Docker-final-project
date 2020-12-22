const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/wishlist',(req,res)=>{
    res.sendFile(path.resolve('public/wishlist.html'));
});


module.exports = router;