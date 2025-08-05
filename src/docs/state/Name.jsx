import React, { useState } from 'react';

const Name = () => {
    const [result, setResult] = useState("")
    const onChangeReult = (e) => {
        
        setResult(e.target.value);
    }

    return (
        <div>
            <p>{result}</p>
            <input type="text" onChange={onChangeReult} />
        </div>
    )
}

export default Name;