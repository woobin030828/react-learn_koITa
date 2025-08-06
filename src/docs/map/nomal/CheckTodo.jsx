import React from 'react';

const CheckTodo = ({todo}) => {
    const {id, handleChecked, task, done} = todo
    return (
        <li style={{textDecoration : done ? "line-through" : ""}}>
        <input type="checkbox" onChange={() => {handleChecked(id)}} checked={done}/>
        <span>{task}</span>
        </li>
    );
};

export default CheckTodo;