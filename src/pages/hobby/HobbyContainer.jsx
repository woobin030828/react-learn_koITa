import React from 'react';
import { useParams } from 'react-router-dom';

const HobbyContainer = () => {

    // url parameter 
    const { hobbies, name } = useParams()
    return (
        <div>
            취미 : { hobbies } 이름 : { name }
        </div>
    );
};

export default HobbyContainer;