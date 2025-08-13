import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';
import AnimalButtonComponent from './AnimalButtonComponent';

const Animal = () => {
    const { state, actions } = useContext(AnimalsContext);
    const { animals } = state
    const { insert, remove } = actions
    const [ value, setValue ] = useState("")
    const onKeyDownEvent = (e) => {
        if (e.key === 'Enter') {
            insert(value)
        }
    }
    const onChangeEvent = (e) => {
        setValue(e.target.value)
    }

    const result = animals.length === 0 ? "" : animals.map((animal, i) => <AnimalButtonComponent key={i} remove={() => remove(i)} animal={animal} />)
    // <AnimalButtonComponent key={i} remove={remove} animal={animal} />
    return (
        <div>
            <input onKeyDown={onKeyDownEvent} onChange={onChangeEvent} type="text" placeholder='동물 이름을 입력하세요' />
            {result}
        </div>
    );
};

export default Animal;