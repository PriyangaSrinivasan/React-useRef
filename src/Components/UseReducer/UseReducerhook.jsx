import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';
const UseReducerhook = ({data}) => {
    const [state , dispatch]= useReducer( ReducerAction,0)
    
    return (
        <div>
            <h1>UseReducer</h1>
            {data.map((element,index)=>{
                return(
                    <div key={element.id}>
                        <img src={element.image} />
                    </div>
                )
            })}
            <>
            {state}
            </><br></br>
            <button className="add" onClick={()=>{dispatch({type:'ADD',payload:1})}}>+</button>
            <button className="sub" onClick={()=>{dispatch({type:'SUB',payload:1})}}>-</button>
        </div>
    );
};

export default UseReducerhook;