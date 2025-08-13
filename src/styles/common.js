// 공통적인 css를 변수에 담아 사용할 수 있도록 제공하는 파일

import { css } from "styled-components"

export const flexCenterRow = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const flexCenterColumn = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`