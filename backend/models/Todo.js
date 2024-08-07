const mongoose =require('mongoose')
const { boolean } = require('webidl-conversions')
const TodoSchema = new mongoose.Schema ({
      Title: {
        Title:string,
        required:true
      },
       
      Description:{
        Description:string,
        required:true
      },

      Completed: {
        Completed:boolean,
        required:false
      },

})

const Todo =  mongoose.new("Todo",TodoSchema);

module.exports = Todo;