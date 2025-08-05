import React, { useState } from 'react';
// result는 사용자가 입력한 결과


const Colors = () => {
    const [result, setResult] = useState("")
    const [color, setColor] = useState("black")
    const onChangeReult = (e) => {
        let value1 = e.target.value;
        setResult(value1);
        if (value1 === "핑크색") {
            setColor("black");
        }
    };
    const clickButton = (e) => {
        let value2 = e.target.innerText;
        if (value2 === "빨간색 버튼") {
            setColor("red")
        } else if (value2 === "파란색 버튼") {
            setColor("blue")
        }
    }
    const style = {
        color: color
    };
    return (
        <div>
            <p style={style}>{result}</p>
            <input type="text" onChange={onChangeReult}/>
            <button onClick={clickButton}>빨간색 버튼</button>
            <button onClick={clickButton}>파란색 버튼</button>
        </div>
    );
};

export default Colors;