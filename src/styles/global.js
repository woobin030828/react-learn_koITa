import { createGlobalStyle } from "styled-components";
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    /* 스타일 리셋 */
    ${reset}

    body {
        box-sizing: border-box;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
        letter-spacing: -0.2px;
        text-decoration: none;
        color: #131313;
        line-height: 1.3;
    }

    button {
        cursor: pointer;
        border: none;
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 100;
        src: url(${process.env.PUBLIC_URL}/asserts/fonts/notoSansKr/NotoSansKR-Thin.ttf) format('woff2');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 200;
        src: url(${process.env.PUBLIC_URL}/asserts/fonts/notoSansKr/NotoSansKR-ExtraLight.ttf) format('woff2');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 300;
        src: url(${process.env.PUBLIC_URL}/asserts/fonts/notoSansKr/NotoSansKR-Light.ttf) format('woff2');
    }

    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 400;
        src: url(${process.env.PUBLIC_URL}/asserts/fonts/notoSansKr/NotoSansKR-Regular.ttf) format('woff2');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 500;
        src: url(${process.env.PUBLIC_URL}/asserts/fonts/notoSansKr/NotoSansKR-Medium.ttf) format('woff2');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 600;
        src: url(${process.env.PUBLIC_URL}/asserts/fonts/notoSansKr/NotoSansKR-SemiBold.ttf) format('woff2');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 700;
        src: url(${process.env.PUBLIC_URL}/asserts/fonts/notoSansKr/NotoSansKR-Bold.ttf) format('woff2');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 800;
        src: url(${process.env.PUBLIC_URL}/asserts/fonts/notoSansKr/NotoSansKR-ExtraBold.ttf) format('woff2');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 900;
        src: url(${process.env.PUBLIC_URL}/asserts/fonts/notoSansKr/NotoSansKR-Black.ttf) format('woff2');
    }
`

export default GlobalStyle;