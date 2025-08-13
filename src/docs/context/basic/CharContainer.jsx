import React from 'react';
import A from './A';
import CharContext from './CharContext';

const CharContainer = () => {
    const name = "어쩌고"
    return (
        <CharContext.Provider value={{name : "홍길동", color : "red"}}>
            <A name={name}></A>
        </CharContext.Provider>
    );
};

export default CharContainer;