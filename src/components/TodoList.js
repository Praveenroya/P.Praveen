import React ,{useState} from 'react'
const [currentTodo, setTodo]= useState()
    function App() {
        return (
          <div className="App">
           <h1>TodoList</h1>
           <p>Title</p>
           <div className='Todo-List'>
            Title:&nbsp;
            <input type='text' name='Tile'></input>
           </div>
           <div className='Todo-List'>
            Description:&nbsp;
            <input type='text' name='Description'></input>
           </div>
           <div className='Todo-List'>
            Completed:&nbsp;
            <input type='text' name='Completed'></input>
           </div>
           </div>
        )
}