import React from 'react';
import useInput from '../../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeFontSize } from '../../../modules/font';

const FontChanger = () => {

    const dispatch = useDispatch();
    const [ wish, onChangewish ] = useInput("")
    const [ color, onChangeColor ] = useInput("")
    const style = useSelector((state) => state.font)
    console.log(useSelector((state) => state))

    return (
        <div>
            <p style={style}>{wish}</p>
            <div>
                <input onChange={onChangewish} type="text" placeholder='소원을 말해보세요'/>
                <button onClick={() => dispatch(changeFontSize())}>100px 크기로 변경</button>
            </div>
            <div>
                <input onChange={onChangeColor} type="text" />
                <button onClick={() => dispatch(changeColor(color))}>컬러를 변경</button>
            </div>
        </div>
    );
};

export default FontChanger;