import React, { useContext } from 'react';
import { FontContext } from './FontContext';
import useInput from '../../../hooks/useInput';

// 정리: fontSize는 Context에서 받아옴 / value는 새로 생성한 useInput에서 받아옴

const FontSizeComponent = () => {
  const { state, actions } = useContext(FontContext) //콘텍스트에서 만들어준 객체를 비구조할당
  const { setFontSize } = actions // 액션으로 받아온 함수를 setFontSize로 만들기
  const { fontSize } = state; // 폰트 사이즈 변수를 fontSize로 받아오기
  const [ value, onChangeValue ] = useInput("") // 'useInput.js [12:5]' useInput.js 에 선언한 value와 onChangeValue를 가져와서 사용 - 초기값은 ""(공백) 

  const inputOnKeyDown = (e) => { //키다운 이벤트 선언
    if(e.key === 'Enter') { // 만약 엔터를 쳤다면,
        setFontSize(value + "px") // fontSize의 상태를 value + px 로 변경해라
    }
  }

  return (
    <div>
      <p style={{fontSize}}>최하위 컴포넌트!😎</p>
      <input onChange={onChangeValue} onKeyDown={inputOnKeyDown} type="text" name="" id="" />
      <button onClick={() => setFontSize(value + "px")}>커지는 버튼!</button>
    </div>
  );
};

export default FontSizeComponent;