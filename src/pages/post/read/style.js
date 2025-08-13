import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const S = {}

  S.FontAwesomeIcon = styled(FontAwesomeIcon)`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    color: red;
    font-size: 100px;
  `

  S.Bg = styled.div`
    width: 100dvw;
    height: 100dvh;
    background-color: black;
    opacity: 0.5;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
  `

export default S;