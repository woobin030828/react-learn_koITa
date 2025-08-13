import React from 'react';

const addNim = (name, callback) => {
    callback(name + "님")
}

const hello = (text) => {
    return text + " 환영합니다."
}
const displayName = <div>{hello(addNim("최우빈", console.log))}</div>

const Callback = () => {
    return (
        <div>
            {displayName}
        </div>
    );
};

export default Callback;