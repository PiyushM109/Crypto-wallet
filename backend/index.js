const express = require('express')
const app = express()




app.get("/",(req,res)=>{
    res.send("server running");
});


app.listen(8080,()=>{
    console.log("App is running on port no:8080 ");
});
