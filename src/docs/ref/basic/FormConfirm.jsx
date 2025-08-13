            import React, { useRef } from 'react';

const FormConfirm = () => {

    const inputRef = useRef([])
    const onClickSubmit = () => {
        for(let input of inputRef.current) {
            if(!input.value){
                alert(`${input.name} 값을 입력하세요.`)
                return 
            }
        };
    }

    return (
        <div>
            <form>
                <div>
                    <span>아이디</span>
                    <input ref={(el) => inputRef.current[0] = el} type="text" name="id" />
                </div>
                <div>
                    <span>비밀번호</span>
                    <input ref={(el) => inputRef.current[1] = el}type="password" name="password" />
                </div>
                <button onClick={onClickSubmit}>전송</button>
            </form>
        </div>
    );
};

export default FormConfirm;