
import { useState } from "react";

function AddTodo({ addTodos}){
    const [todotext,setTodotext]=useState('');
 return(
    <>
    <input placeholder="add your next todo....."
    onChange={(e)=>setTodotext(e.target.value)}
    value={todotext}
    />
    <button onClick={()=>{
        addTodos(todotext);
        setTodotext('');
    }}>Submit</button>
    </>
 )
}
export default AddTodo;