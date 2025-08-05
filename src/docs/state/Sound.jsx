import React, { useState } from 'react';

const Sound = () => {

    const [ sound, setSound ] = useState("")

    const soundChange = (e) => {
        let value = e.target.innerText
        console.log(value)
        if(value === "고양이 버튼") {
            setSound("야옹")
        } else if (value === "강아지 버튼") {
            setSound("멍멍")
        } else {
            setSound("기무띠")
        }
    }

    return (
        <div>
            사운드
            <button onClick={soundChange}>강아지 버튼</button>
            <button onClick={soundChange}>고양이 버튼</button>
            <button onClick={soundChange}>기무띠 버튼</button>
        </div>
    );
};

export default Sound;