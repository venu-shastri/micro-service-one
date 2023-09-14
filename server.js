const express=require('express');
const app=express();
const port=3000;
const username="user"
const password="4566778889899";
app.get('/',(req,res)=>{
    let today=new Date();
    let time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

    let message=`Response From MicroService V3 , current time is ${time}`;
    res.send(message);
});
app.listen(port,()=>{
    console.log("Microservice One version 3  is running");
});