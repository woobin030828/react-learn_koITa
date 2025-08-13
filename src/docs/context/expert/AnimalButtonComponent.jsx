import React from 'react';
import AnimalButton from './style';

const AnimalButtonComponent = ({ index, remove, animal}) => {
    return (
        <div>
            <li><AnimalButton onClick={remove}>{animal}</AnimalButton></li>
        </div>
    );
};

export default AnimalButtonComponent;