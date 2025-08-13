import React from 'react';
import styled from 'styled-components'

const StyledH1 = styled.h1`
    font-size: 10px;
    color: red;
    text-decoration: line-through;
`;


const Styled01 = () => {
    return (
        <div>
            <StyledH1>스타일 적용해조</StyledH1>
        </div>
    );
};

export default Styled01;