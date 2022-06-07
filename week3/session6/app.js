/*const fs=require('fs');

fs.writeFile('data.txt',"Hello there!",(err) =>{
    if(err) throw err;
    console.log("writing is done");
    fs.readFile("data.txt","utf-8",(err,data) => {
        if(err) throw err;
        console.log(data);
    });
});
*/

// const logger =require('./logger.js');
// logger.log();

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
