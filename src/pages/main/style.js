import styled from 'styled-components';

const S = {}

S.Button = styled.button`
    border: 1px solid black;
    background-color: white;
    color: red;
`
S.Container = styled.div`
    border: 2px solid red;
    background-color: white;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
S.Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default S;