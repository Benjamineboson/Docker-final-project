const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const pages = require('./routes/pages');
const secureRoute = require('./routes/secure');

app.use(express.json());
app.use(express.static('public'));
app.use('/secure',secureRoute);
app.use('/',pages);


app.listen(PORT,(req,res)=>{
    console.log("Listen on "+PORT);
})