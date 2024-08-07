const { Console } = require('console');
const express = require('express')


const app = express();
const mongoose =require('mongoose')
const host ="127.0.0.1"
const port = 5678

app.post('./Todo',(req, res) =>{

    const{Title, Description, Completed}=req.body
    Todo[id]={Title, Description, Completed};
    res.status(200).json({
        success:true,
        data:Todo
    })
})

app.get('./Todo',(req, res) =>{
    res.send(
        Title="Welcome to Project",
        Description="This an project information"
)
       
    
})
 const Mongo_Url ="mongodb+srv://Naveen:Naveen@cluster0.yzlhka4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(Mongo_Url, {});
mongoose.connection.on('connected', ()=>{
    console.log("My MongoDB is connected");
})
app.use('./api',express());

app.listen(port, () =>{
    console.log("The server is started"+port)
})
