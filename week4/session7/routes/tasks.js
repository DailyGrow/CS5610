const express=require("express");
const router=express.Router();
const axios=require("axios");

router.get("/",function(req,res){
    axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then((response)=>{
        res.json(response.data);
    })
    .catch((err)=>{
        console.log(err).code;
    })
});

router.get("/:taskId",function(req,res){
    axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`)
    .then((response)=>{
    console.log(response);
        res.render("task.pug" ,{
            id:req.params.taskId,
            title:response.data.title,
            completed:response.data.completed,
        });
    })
    .catch((err)=>{
        console.log(err);
    })
});

/*--activity4--*/
router.get("/", async function(req,res){
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        res.json(response.data);
    }
    catch(err){
        console.log(err.code);
    }
});

router.get("/:taskId",async function(req,res){
    try{
        const response=await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`)
        //console.log(response.data)
        const userResponse=await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`)
        res.render("task.pug" ,{
            id:req.params.taskId,
            title:response.data.title,
            completed:response.data.completed,
            name:userResponse.data.name
        });
    }
    catch(err){
        console.log(err);
    }
});





router.get('/:taskId',function(req,res){
    console.log(req.params);
    //res.send(`You are viewing task ${req.params.taskId}`);
    res.render('task.pug',{id:req.params.taskId});
});

module.exports=router;
