import React, { useEffect, useState } from 'react';
import getTodos from './getTodos';
import Todo from './Todo';
import TodoInsert from './TodoInsert';

const TodoContainer = () => {
    
    const [todos, setTodos] = useState([])
    const [handleTodods, setHandleTodos] = useState(false)

    useEffect(() => {
        getTodos("https://json-server.ideaflow.co.kr/todos")
            .then(setTodos)
            .catch(console.error)
    }, [handleTodods])
    
    const props = {
        handleTodods: handleTodods,
        setHandleTodos: setHandleTodos
    }
    const todoList = todos.length === 0 ? "" : todos.map((todo, i) => <Todo key={i} todo={todo} {...props} />)

    return (
        <div>
            <TodoInsert todos={todos} {...props}/>
            <h1>남은 할일의 개수: {todos.length && todoList.length}</h1>
            <div>{todoList}</div>
        </div>
    );
};

export default TodoContainer;