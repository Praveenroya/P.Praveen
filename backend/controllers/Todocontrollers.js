const Todo =require('./models/Todo')
const Todo = async(req, res)=>{
    const{Title, Description, Completed}= req.body
    
        res.statua(200).json({
            success:true,
            data:Todo
        })


exports.getTodo =async(req, res)=> {
const response = await findbyTodo({});
                
        await Todo.save();
        res.status(201).json({
         success:true,
         data:Todo
        })
    }

    }
           
        
    


    exports.createTodo = async (req, res)=>{
        const{Title, Description, Completed} = req.body

    const Todo =  newTodo();
    }

    await Todo.save();
    res.status(200).json({
        success:true,
        data:Todo
    })
 



   
