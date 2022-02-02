import { React } from "react";
import { useRecoilState } from 'recoil';
import { doneTodosAtom, todosAtom } from '../atoms';


import ToDoInput from './ToDoInput';
import ToDoTable from "./ToDoTable";
import '../../node_modules/bulma/css/bulma.css';
import logo from '../images/logo192.png';

export default function ToDo() {

    // eslint-disable-next-line no-unused-vars
    const [todos, setTodo] = useRecoilState(todosAtom);
    // eslint-disable-next-line no-unused-vars
    const [doneTodos, setDoneTodos] = useRecoilState(doneTodosAtom);

    console.log(todos);
    
    return (
        
        <div className="ToDo container has-background-danger-light py-6 is-desktop">

            <h1 className="has-text-centered is-size-2">React ToDo App</h1>

            <img id='logo' className='mx-auto' style={{display: 'block'}} src={logo} alt="React Logo" />


            <div 
            className="ToDo-row1 section is-small has-text-centered">

                <ToDoInput className="column"></ToDoInput>

            </div>

            <div 
            className="ToDo-row2 section is-large has-text-centered">

                <p className="mb-4 is-size-6"> * Click on todo to mark as done</p>

                <ToDoTable></ToDoTable>
            </div>

        </div>
    )
}