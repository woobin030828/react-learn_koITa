import React, { useRef, useState } from 'react';
import CheckBoxRefTask from './CheckBoxRefTask';

const CheckBoxRefTaskContainer = () => {
const languages = ["JAVA", "Python", "JS"]
const inputRef = useRef([])
const [result, setResult] = useState("")
const onChangeCheckBox = (e) => {
    let lest = [];

    inputRef.current.forEach((input, i, inputArr) => {
        if(input.checked) {
            lest.push(input.value)
        }
    })
    setResult(lest.join(", "))
}


const checkboxs = languages.map((language, index) => <CheckBoxRefTask key={index} language={language} inputRef={inputRef} onChangeCheckBox={onChangeCheckBox} index={index}/>)
    return (
        <>
            <p>{result}</p>
            {checkboxs}
        </>
    );
};

export default CheckBoxRefTaskContainer;