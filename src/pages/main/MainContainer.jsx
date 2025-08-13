import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const MainContainer = () => {
    return (
        <div>
            <S.Container>
            <h1>메인페이지 ★</h1>
                <S.Wrap>
                    <S.Button>
                        <Link to={"/intro?jobs=developer"}>인트로</Link>
                    </S.Button>
                    <S.Button>
                        <Link to={"/hobby/soccar/홍길동"}>취미</Link>
                    </S.Button>
                </S.Wrap>
            </S.Container>
        </div>
    );
};

export default MainContainer;