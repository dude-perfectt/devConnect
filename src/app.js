const express = require('express');

const app = express();

app.use("/test", (req, res) => 
{
    res.send("Hello !!!!!!");
});

app.use("/good", (req, res) => 
{
    res.send("Hello good!!!!!!");
});

app.listen(7777,()=>{
    console.log("Server is running on port 7777");
});