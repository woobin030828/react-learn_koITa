import React from 'react';

const CheckBoxRefTask = ({ language, onChangeCheckBox, inputRef, index }) => {
    return (
        <div>
            <label>
                <span>{language}</span>
                <input type="checkbox" name="language" onChange={onChangeCheckBox} ref={(el) => (inputRef.current[index] = el)} value={language}/>
            </label>
        </div>
    );
};

export default CheckBoxRefTask;