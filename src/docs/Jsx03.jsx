const Jsx03 = () => {
    const info = {
        name: "최우빈",
        age: 23,
        message: "안녕 디지몬~!!",
        getTrueAge: function() {
        return this.age - 1;
    }
    }

    return (
        <>
            <p>저의 이름은 {info.name} 입니다. 나이는 {info.age} 이고, 만나이는 {info.getTrueAge()} 입니다. {info.message}</p>
        </>
    );
}

export default Jsx03;