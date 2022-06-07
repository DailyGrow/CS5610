const express=require("express");

const router=express.Router();

router.get('/',function(req,res){
    res.send('<h1>List of all the tasks</h1>');
});

router.get('/:taskId',function(req,res){
    console.log(req.params);
    //res.send(`You are viewing task ${req.params.taskId}`);
    res.render('task.pug',{id:req.params.taskId});
});

module.exports=router;