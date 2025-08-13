import React, { useState } from 'react';
import fetchTodo from './fetchTodo';

const TodoInsert = ({todos, handleTodods, setHandleTodos}) => {
    const [value, setValue] = useState("")
    const insertOptions = {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        // JSON - JSON 프로토타입
        // .stringify() : JSON 객체로 변환한 값을 리턴하는 메서드 
        body: JSON.stringify({
            id: (todos.length + 1).toString(),
            title: value,
            isChecked : false
        })
    }
    const onChangeValue = (e) => {
        setValue(e.target.value)
    }
    const insertTodo = async (e) => {
        if(e.key === 'Enter') {

        if(!window.confirm('이대로 추가하시겠습니까?')) return;

        fetchTodo('https://json-server.ideaflow.co.kr/todos', insertOptions)
            .then((res) => {
                if(!res.ok) return alert('알 수 없는 오류 발생');
                alert('할 일 추가가 완료 되었습니다!')
                setHandleTodos(!handleTodods)
            })
            .catch(console.error)
        }
    }
    return (
        <div>
            <input onChange={onChangeValue} onKeyDown={insertTodo} type="text" placeholder='오늘 할 일을 추가해 볼까요?' name="" id="" />
        </div>
    );
};

export default TodoInsert;