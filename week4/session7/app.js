const fs=require("fs");
const util=require('util');

const writePromise=util.promisify(fs.writeFile);
const readPromise=util.promisify(fs.readFile);

writePromise("data.txt","Hey there!")
.then(()=>{
    console.log("writing is done");
    readPromise("data.txt","utf-8").then((data)=>{
        console.log(data);
    });
})
.catch((err)=>{console.log(err)});

/*
fs.writeFileSync("data.txt",'Hello There!',(err)=>{
    if(err) throw err;
    console.log("writting is done");
    fs.readFile('data.txt',"utf-8",(err,data)=>{
        if(err) throw err;
        console.log(data);
    });
});*/
const express=require('express');
const app=express();
const port=3000;

const tasksRouter = require('./routes/tasks');

app.set(`views`,'views');
app.set('view engine','pug');

app.use('/tasks',tasksRouter);

app.use(express.static('public'));
app.get("/",function(req,res){
    res.send("Hello world");
});
app.get("/tasks",function(req,res){
    res.send('<h1>List of all the tasks</h1>');
});

app.get("/tasks/:taskId",function(req,res){
    console.log(req.params);
    res.send(`You are viewing tasks ${req.params.taskId}`);
});

app.listen(port,function(){
    console.log(`Example app listening on port ${port}!`);
});

