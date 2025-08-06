import React, { useRef, useState } from 'react';

const RefName = () => {
    const [ result, setResult ] = useState("")
    const nameRef = useRef({});
    const onChangeReult = (e) => {
        setResult(e.target.value);
    }
    const addNim = () => {
        setResult(nameRef.current.innerText.replace("님", "") + "님");
    }
    return (
        <div>
            <p ref={nameRef}>{result}</p>
            <input type="text" onChange={onChangeReult} />
            <button onClick={addNim}>님 추가</button>
        </div>
    )
};

export default RefName;