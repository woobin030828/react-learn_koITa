import React, { useState } from 'react';
import S from './style';

const Styled04 = () => {

    const [colorResult, setColorResult] = useState("")
    const [value, setValue] = useState("")
    const onChangeText = (e) => {
        setValue(e.target.value)
    }
    const onKeyDownEvent = (e) => {
        if (e.key === 'Enter') {
            setColorResult(value)
        }
    }

    return (
        <div>
            <input onKeyDown={onKeyDownEvent} onChange={onChangeText} type="text" name="" id="" />
            <S.P color={colorResult}>컬러가 적용될 컬러</S.P>
            {/* <S.P fontColor={"red"}>파란색</S.P> */}
        </div>
    );
};

export default Styled04;