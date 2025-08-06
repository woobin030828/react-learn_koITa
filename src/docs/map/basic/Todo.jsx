import React from 'react';

const Todo = ({todo}) => {

    const {task, done} = todo

    return (
        <div>
            <li>{task} {done}</li>
        </div>
    );
};

export default Todo;