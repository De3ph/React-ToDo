import { React } from "react";
import '../../node_modules/bulma/css/bulma.css'

const WillDoTable = ({todos , setTodo , handleDone}) => {
 
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
                                    onClick={()=>{handleDone(todo)}} key={index}>{todo}</td>
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

