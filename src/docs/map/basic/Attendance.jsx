import React from 'react';


const Attendance = ({student}) => {
    const {name, isPresent} = student
    // 수정 확인
    const style = {}

    if (isPresent) {
        style.color = "blue";
    } else {
        style.fontSize = "10px"
    }

    return (
        <>
            <li style={style}>{name}</li>
        </>
    );
};

export default Attendance;