import React, { useState } from 'react';

const Count = () => {
    const [ number, setNumber ] = useState(0);
    const plus = number + 1;
    const minus = number - 1;
    const crease = (e) => {
        e.target.id === "plus" ? setNumber(plus) : setNumber(minus)
    }
    return (
        <div>
            <h1>{number}</h1>
            <button id="plus" onClick={crease}> +1 증가 </button>
            <button id="minus" onClick={crease}> -1 감소 </button>
        </div>
    );
    
};

export default Count;