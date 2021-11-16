import React from "react";
import DoneTable from "./DoneTable";
import WillDoTable from "./WillDoTable";
import '../../node_modules/bulma/css/bulma.css'

export default function ToDoTable({ todos, doneTodos, setTodo, setDoneTodos,  handleDone }) {

    return (
        <div className='ToDoTable columns is-variable is-2'>
            <WillDoTable handleDone={handleDone} setTodo={setTodo} todos={todos}></WillDoTable>
            <DoneTable setDoneTodos={setDoneTodos} doneTodos={doneTodos}></DoneTable>
        </div>
    );
}