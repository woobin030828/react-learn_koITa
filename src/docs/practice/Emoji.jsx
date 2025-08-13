import React, { useState } from 'react';

const Emoji = () => {
    const emojiData = [
        { id: "Happy", name: "기쁨", emoji: "😊" },
        { id: "Sad", name: "슬픔", emoji: "🥲" },
        { id: "Angry", name: "화남", emoji: "🫥" },
        { id: "Soso", name: "지루함", emoji: "😑" },
        { id: "Calm", name: "평온", emoji: "😮‍💨" }
    ];
    // 변수 선언 및 set변수 선언
    const [result, setResult] = useState("")

    const swapEmoji = (e) => {
        // id는 출력할 필요 없으니까, 출력할 이름 + 이모지만 문자열로 바꿔서 배열을 재생성함
        const emojiTextData = emojiData.map((emojis) => emojis.name + " " + emojis.emoji)

        // 이미 result에 있는 감정(중복) 중복 값 제외한 새로운 배열을 생성함
        const filterData = emojiTextData.filter((text) => text !== result);
        // 난수 생성 (걸러진 배열의 길이만큼 + 소수점 버림)
        const randomNumber = Math.floor(Math.random() * filterData.length); // 숫자를 뱉어요(int) 1
        // 중복값이 없는 배열에서 랜덤한 요소를 displayEmoji에 넣는다.
        const displayEmoji = filterData[randomNumber]; // [0] [1] [2] ...
        setResult(displayEmoji) // displayEmoji에 있는 값을 result로 설정한다.
    }
    return (
        <div>
            <p>{result}</p> {/* 출력 */}
            <button onClick={swapEmoji}>나의 감정</button>
        </div>
    );
};

export default Emoji;