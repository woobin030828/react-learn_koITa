import { createContext, useState } from "react";


export const FontContext = createContext({ // 초기값 설장
    state: { fontSize: "" }, // 폰트 사이즈 객체(스타일 객체)
    actions: { setFontSize: () => {} } // setState 함수가 들어갈 자리
})

// 관심사의 분리

export const FontSizeProvider =  ({children}) => { // Provider 선언
    const [fontSize, setFontSize] = useState("40px") // 글자 크기 초기 값 40px 설정 및 상태 선언
    const value = { // value 객체 선언(Provider에 들어갈 상태)
        state : { fontSize : fontSize }, // state는 fontSize
        actions: { setFontSize: setFontSize } // actions는 setFontSize
    }
    return(
    //value를 바로 Provider에 선언하여 자식에게 상속
    <FontContext.Provider value={value}>  
    {/* innerHTML은 그대로 받아와서 출력하기 */}
        {children}
    </FontContext.Provider>
)}

export default FontContext;
