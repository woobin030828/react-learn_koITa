import React, { useState } from 'react';
import CheckTodo from './CheckTodo';

const CheckTodoCotainer = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: "React 공부하기", done: false },
        { id: 2, task: "운동하기", done: true },
        { id: 3, task: "장보기", done: false },
        { id: 4, task: "점심 먹기", done: false },
        { id: 5, task: "코딩하기", done: true },
    ])

// 화면에 todo의 데이터를 출력한다.
// todo의 상태(done)이 true 상태라면 
// textdecoration: line-through 적용시킨다. 
// todo의 상태(done)이 false 라면 아무 스타일도 들어가지 않는다.
// checkbox를 클릭하면 상태(done)가 변경되고, 스타일도 맞게 들어간다. checkedPoint

    const handleChecked = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo ))
    }

    const result = todos.map(({id, task, done}) => {

        return (
            <CheckTodo key={id} id={id} task={task} done={done} handleChecked={handleChecked}/>
        )
})
    return (
        <div>
            {result}
        </div>
    );
};

export default CheckTodoCotainer;