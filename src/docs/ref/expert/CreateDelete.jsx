import React, { useRef, useState } from 'react';

const CreateDelete = () => {
    const [foods, setFoods] = useState([])
    const inputRef = useRef([{}])
    const checkboxRef = useRef([])
    
    // food의 길이가 0이 아니라면, food map으로 리스트를 출력한다.
    const result = foods.length === 0 ? "" : foods.map((food , i) => <li key={i}><input type="checkbox" checked={food.isCheck} value={food.english} /><span>{food.korean} ({food.english})</span></li>)
    
    // 버튼을 클릭할 때마다
    const onClickEvent = (e) => {
        // 만약에 버튼의 아이디가 add 라면
        console.log(e.target.id)
        if(e.target.id == "add") {
            const inputCurrent = inputRef.current
            // 새로운 객체를 생성한다
            let foodTemp = {
                korean: inputCurrent[0].value, // index의 Ref에서 0번째 자리의 값을 korean에 넣는다
                english: inputCurrent[1].value // index의 Ref에서 1번째 자리의 값을 english에 넣는다
            }
            setFoods([...foods, foodTemp])
        } else {
           // foods에서 체크한 친구를 찾는다. 
           checkboxRef.current.forEach((checkbox, i, arr) => {
            if(checkbox !== null) {
                if(checkbox.checked == true) {
                    const spliceFood = foods.filter((food, i) => !checkboxRef.current[i].checked);
                    console.log(checkbox.checked)
                    setFoods(spliceFood)
                }
            }
           });
            checkboxRef.current.forEach((checkbox) => {
                 if(checkbox !== null) {
                    checkbox.checked = false
                }
            });
        }
    }
    
    // foods [{ korean : "돈까스", english : "katsu"}]

    return (
        <div>
            <div>
                <span>
                    <input type="text" ref={(el) => (inputRef.current[0] = el)}/>
                    <input type="text" ref={(el) => (inputRef.current[1] = el)}/>
                </span>
                <span>
                    <button id="add" onClick={onClickEvent}>추가</button>
                    <button id="delete" onClick={onClickEvent}>삭제</button>
                </span>
            </div>
            <ul>
                {result}
            </ul>
        </div>
    );
};

export default CreateDelete;