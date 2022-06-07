// let version =2.6;
// function log(){
//     console.log("logged successfully");
// }

// module.exports.log=log;
// module.exports.version=version;
/* module is an object
module.exports={
    log:log,
    version:version
}*/

/* make them public
exports.log=log;
exports.version=version;
*/

const express=require('express');
const app=express();
const port =3000;
app.get('/',function(req,res){
    res.send("Hello World!")
});
app.get('/tasks',function(req,res){
    res.send('<h1>List of all the tasks</h1>')
});

app.get('/tasks/:taskId',function(req,res){
    console.log(req.params);
    res.send(`You are viewing task ${req.params.taskId}`);
});

app.listen(port,function(){
    console.log(`Example app listening on port ${port}!`)
});