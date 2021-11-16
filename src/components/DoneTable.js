import React from "react";
import '../../node_modules/bulma/css/bulma.css'
 
export default function DoneTable({doneTodos , setDoneTodos}){

    return(
        <div className="DoneTable column ">
            <div className='is-size-5'>Done Todos</div>
            <br />
            
            <table className="mx-auto table" style={{background: 'inherit'}}>
                <thead></thead>
                <tbody>
                {
                        doneTodos.map((todo,index)=>{
                            return(
                                <tr>
                                    <td key={index}>{todo}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button className="button" onClick={()=>{setDoneTodos([])}}>Clear</button>
        </div>
    )
}
