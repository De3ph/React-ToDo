import React from "react";
import {useRecoilValue, useSetRecoilState} from 'recoil'

import { MarkAsDone } from "../logic/MarkAsDone";

import DoneTable from "./DoneTable";
import WillDoTable from "./WillDoTable";
import '../../node_modules/bulma/css/bulma.css'
import { doneTodosAtom, todosAtom } from "../atoms";


export default function ToDoTable() {

    const todos = useRecoilValue(todosAtom);
    const setTodo = useSetRecoilState(todosAtom);

    const doneTodos = useRecoilValue(doneTodosAtom);
    const setDoneTodos = useSetRecoilState(doneTodosAtom);

    return (
        <div className='ToDoTable columns is-variable is-2'>
            <WillDoTable handleDone={MarkAsDone} ></WillDoTable>
            <DoneTable setDoneTodos={setDoneTodos} doneTodos={doneTodos}></DoneTable>
        </div>
    );
}