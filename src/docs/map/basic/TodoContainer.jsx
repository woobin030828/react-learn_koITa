import React from 'react';
import Todo from './Todo';

const TodoContainer = () => {
    const todoData = [
        { id: 1, task: "React 공부하기", done: false },
        { id: 2, task: "운동하기", done: true },
        { id: 3, task: "장보기", done: false },
        { id: 4, task: "점심 먹기", done: false },
        { id: 5, task: "코딩하기", done: true },
    ]
    
    //todo 데이터만 출력하기
    // const result = todoData.map((todo, i) => todo.done ? <li key={i}>{todo.task}</li> : <></>)

    // return (
    //     <div>
    //         <ul>{result}</ul>
    //     </div>
    // );
    
    //컴포넌트로 분리하기
    const result = todoData.map((todo, i) => todo.done ? <Todo key={i} todo={todo} /> : <></>)

    return (
        <div>
            <ul>{result}</ul>
        </div>
    )

};

export default TodoContainer;