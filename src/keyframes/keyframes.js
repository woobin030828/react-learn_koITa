import {keyframes} from "styled-components";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translate(0, -30px);
    }
    100% {
        opacity: 100%;
        transform: translate(0, 0);
    }

`