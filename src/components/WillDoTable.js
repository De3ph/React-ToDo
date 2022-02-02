import { React } from "react";
import { useRecoilValue , useSetRecoilState } from 'recoil'
import { todosAtom, doneTodosAtom } from "../atoms";
import '../../node_modules/bulma/css/bulma.css'

const WillDoTable = ({handleDone}) => {

    const todos = useRecoilValue(todosAtom);
    const setTodo = useSetRecoilState(todosAtom);

    const doneTodos = useRecoilValue(doneTodosAtom);
    const setDoneTodos = useSetRecoilState(doneTodosAtom);
 
    return (
        <div className="WillDoTable column">
            <div className='is-size-5'>Undone Todos's</div>
            <br />

            <table className="mx-auto table" style={{background: 'inherit'}}>
                <thead></thead>
                <tbody>
                {
                        todos.map((todo,index)=>{
                            return(
                                <tr>
                                    <td style={{cursor: 'pointer'}}
                                    onClick={()=>{handleDone(todo , todos, setTodo, doneTodos, setDoneTodos)}} key={index}>{todo}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button className='button' onClick={()=>{setTodo([])}}>Clear</button>
        </div>
    );
}

export default WillDoTable;

