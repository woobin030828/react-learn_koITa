import React, { useState } from 'react';


const LikesContainer = () => {
    
    const [ likelist, setLikelist ] = useState([
        {
            name: "운동"
        },
        {
            name: "게임"
        },
        {
            name: "음악"
        },
        {
            name: "코딩"
        },
    ])
     
    const buttonClick = (index) => {
        setLikelist(likelist.filter((_, i) => i !== index))
    }

    const inputChange = (e) => {
        const value = e.target.value;
        if(e.key === 'Enter') {
            setLikelist(...likelist, { name: value })
        } 
    }

    const result = likelist.map(({name}, i) => 
    <button onClick={() => {buttonClick(i)}}>{name}</button> )

    return (
        <div>
            {result}
            <div>
                <input type="text" onKeyDown={inputChange}/>
            </div>
        </div>
    );
};

export default LikesContainer;