// 컨테이너는 js로 써주는게 관례
import React from 'react';
import Food from './Food';

const FoodContainer = () => {

    const foods = [
        {
            id: 1,
            name: "마라탕"
        },
        {
            id: 2,
            name: "육개장"
        },
        {
            id: 3,
            name: "라면"
        },
        {
            id: 4,
            name: "뚝불"
        },
        {
            id: 5,
            name: "배고프다"
        },
    ]
// jsx 에서의 map, jsx 문법의 태그로 변환

    const result = foods.map((food, i) => <Food key={i} food={food.name} />)
    
    return (
        <div>
            <ul>
                {result}
            </ul>
        </div>
    );
};

// 수정 확인

export default FoodContainer;