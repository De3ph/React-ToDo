import React from "react";
import { useState } from "react";
import '../../node_modules/bulma/css/bulma.css'

const ToDoInput = ({handleTodo}) => {
    
    const [text, setText] = useState('');

    return (

        <div className="ToDoInput">
            <input className="ToDoInput-todoinput input my-2" isdone='false' placeholder='ToDo' type="text" name="textInput" value={text} onChange={(e) => { setText(e.target.value) }} />

            <button 
            className="ToDoInput-button button my-2 is-white"
            onClick={()=>handleTodo(text ,setText)}
            type='submit'>Add</button>
        </div>

    );

}

export default ToDoInput;