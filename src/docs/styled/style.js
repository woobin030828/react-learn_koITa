import styled from 'styled-components';
import { flexCenterRow, flexCenterColumn } from '../../styles/common';

const S = {}

// S.Box = styled.div`
//     width: 200px;
//     height: 200px;
//     border: solid 1px black;

// `;


// S.P = styled.p`
//     font-size: 30px;

// `

// S.H1 = styled.h1`
//     font-size: 15px;
//     color: red;
// `

// S.Div = styled.div`
//     width: 100px;
//     height: 100px;
//     background-color: blue;
// `

// S.Button = styled.button`
//     border: 1px solid black;
//     font-size: 15px;
// `

S.P = styled.p`
    color: ${(props) => props.color};
`
S.Box = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid black;
    ${flexCenterRow}
`

S.Ul = styled.ul`
    ${flexCenterColumn}
`

S.Form = styled.form`
    ${flexCenterColumn}
`

S.Wrap = styled.div`
    ${flexCenterColumn}

    /* 자식과 자손 */
    /* &: 자기 자신 선택자 */
    & input {
        border: none;
    }
`

S.Test = styled.div`
    font-family: 'NotoSansKR-Reqular';
`
S.ThemeButton = styled.button`
    background-color: ${(props) => props.theme.PALLETE.primary.main};
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    line-height: ${({theme}) => theme.FONT_LINE["h1"]};
`

S.ThemeInput = styled.input`
    background-color: ${(props) => props.theme.PALLETE.primary.main};
    color: ${({theme}) => theme.PALLETE.secondary}
`

export default S;