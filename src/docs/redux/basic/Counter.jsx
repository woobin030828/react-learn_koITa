import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, increaseValue } from '../../../modules/count';
import useInput from '../../../hooks/useInput';

const Counter = () => {
    const [value, onChangeValue] = useInput("")
    const dispatch = useDispatch();
    
    const {number} = useSelector((state) => state.count)

    const onClickEvent = () => {
        if (!-value) return alert("숫자가 아닙니다.") 
            dispatch(increaseValue(+value))
        }

    return (
        <div>
            <div>
                {number}
                <button onClick={() => dispatch(decrease())}>+1</button>
                <button onClick={() => dispatch(increase())}>-1</button>
            </div>
            <div>
                <input type="text" onChange={onChangeValue} />
                <button onClick={() => onClickEvent()}>더하기</button>
            </div>
        </div>
        
    );
};

export default Counter;