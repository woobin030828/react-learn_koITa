import React , { useState }  from 'react';

const Hobby = () => {

    const [ hobby, setHobby ] = useState("")
    const [ style, setStyle ] = useState({})

    const changeStyle = (e) => {
        const value = e.target.value
        setHobby(e.target.value)
        if (value === "축구") {
            setStyle({...style, fontSize: "50px"})
        } else if (value === "농구") {
            setStyle({...style, color: "blue"})
        } else {
            setStyle({...style})
        }
    }   

    return (
        <div>
            <p style={style}>{hobby}</p>
            <input type='text' onChange={changeStyle} />
        </div>
    );
};

export default Hobby;