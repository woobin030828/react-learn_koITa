import React from 'react';

const Jsx04 = () => {
    const name = undefined || "초기값"
    const login = true;
    const guest = false;
    return (
        <div>
            {login && guest && (
                <p>비회원 로그인입니다.</p>
            )}
            {login ? (<>{name}님 환영합니다</>) : (<>로그인 실패</>)}
        </div>
    );
};

export default Jsx04;