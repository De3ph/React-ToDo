import React from "react";
import { useState } from "react";

import { useRecoilValue , useSetRecoilState} from 'recoil'
import { todosAtom } from '../atoms';

import { ToDoCreator } from '../logic/ToDoCreator'
import '../../node_modules/bulma/css/bulma.css'

const ToDoInput = () => {
    
    const [text, setText] = useState('');
    const todos = useRecoilValue(todosAtom);
    const setTodos = useSetRecoilState(todosAtom);

    return (

        <div className="ToDoInput">
            <input className="ToDoInput-todoinput input my-2" isdone='false' placeholder='ToDo' type="text" name="textInput" value={text} onChange={(e) => { setText(e.target.value) }} />

            <button 
            className="ToDoInput-button button my-2 is-white"
            onClick={
                async ()=>{
                    await ToDoCreator(text, todos, setTodos);
                    setText('');
                }
            }
            type='submit'>Add</button>
        </div>

    );

}

export default ToDoInput;