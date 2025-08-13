import React, { useState } from 'react';
import fetchTodo from './fetchTodo';

const Todo = ({todo, handleTodods, setHandleTodos}) => {
    const {id, title, isChecked} = todo; // userID
    const todoUrl = `https://json-server.ideaflow.co.kr/todos/${id}`

    const [isEdit, setEdit] = useState(false)
    const [value, setValue] = useState(title)

    const onChangeValue = (e) => setValue(e.target.value)
    const isChangeEdit = () => setEdit(!isEdit)
    
    const updateOptions = {
        method: "PUT",
        headers: {
            'Content-Type' : 'application/json'
        },
        // JSON - JSON 프로토타입
        // .stringify() : JSON 객체로 변환한 값을 리턴하는 메서드 
        body: JSON.stringify({
            ...todo,
            title: value,
        })
    }
    const checkOptions = {
        method: "PUT",
        headers: {
            'Content-Type' : 'application/json'
        },
        
        body: JSON.stringify({
            ...todo,
            isChecked: !isChecked,
        })
    }
    const removeOption = {
        method: "DELETE"
    }
    const removeTodo = () => fetchTodo(todoUrl, removeOption)
        .then((res) => {
            if(!res.ok) return alert('알 수 없는 오류 발생');
            alert('삭제 완료!')
            setHandleTodos(!handleTodods)
        })
        .catch(console.error)

    const updateTodo = () => fetchTodo(todoUrl, updateOptions)
        .then((res) => {
            if(!res.ok) return;
            setEdit(!isEdit)
            setHandleTodos(!handleTodods)
        })
        .catch(console.error)

    const updateCheck = async (e) => fetchTodo(todoUrl, checkOptions)
        .then((res) => {
            if(!res.ok) return alert("알 수 없는 오류 발생");
            setHandleTodos(!handleTodods)
        })
        .catch(console.error)
        
    return (
        <div>
            <li><input type="checkbox" onChange={updateCheck} checked={isChecked}/>
            { isEdit ? <input defaultValue={title} onChange={onChangeValue}/> : <span style={{textDecoration: isChecked ? 'line-through' : ""}}>{title}</span> }
            { isEdit ? <button onClick={updateTodo}>완료</button> : <button onClick={isChangeEdit}>수정</button>}
            <button onClick={removeTodo}>삭제</button></li>
        </div>
    );
};

export default Todo;