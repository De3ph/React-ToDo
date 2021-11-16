import { React, useState } from "react";
import ToDoInput from './ToDoInput';
import ToDoTable from "./ToDoTable";
import '../../node_modules/bulma/css/bulma.css';
import logo from '../images/logo192.png';

export default function ToDo() {


    const [todos, setTodo] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);

    let createToDo = (newToDo , stateFunctionOfToDoText) => {
        if (newToDo === '') {
            return
        }
        else {
            let added = todos.slice();
            added.push(newToDo);
            setTodo(added);
            stateFunctionOfToDoText('');
        }

    }

    let markAsDone = (doneTodo) => {
        let newTodos = todos.filter((todo) => {
            return todo !== doneTodo
        });
        setTodo(newTodos);
        let newDoneTodos = doneTodos.slice();
        newDoneTodos.push(doneTodo);
        setDoneTodos(newDoneTodos);
        console.log(doneTodos);
    }

    return (
        
        <div className="ToDo container has-background-danger-light py-6 is-desktop">

            <h1 className="has-text-centered is-size-2">React ToDo App</h1>

            <img id='logo' className='mx-auto' style={{display: 'block'}} src={logo} alt="React Logo" />

            <div 
            className="ToDo-row1 section is-small has-text-centered">

                <ToDoInput 
                className="column" 
                handleTodo={createToDo}>
                </ToDoInput>

            </div>

            <div 
            className="ToDo-row2 section is-large has-text-centered">

                <p className="mb-4 is-size-6"> * Click on todo to mark as done</p>

                <ToDoTable
                    handleDone={markAsDone}
                    todos={todos}
                    setTodo={setTodo}
                    doneTodos={doneTodos}
                    setDoneTodos={setDoneTodos}

                ></ToDoTable>
            </div>

        </div>
    )
}