import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>
                <li>
                    <Link to={"/"}>메인</Link>
                </li>
                <li>
                    <Link to={"/posts"}>게시판</Link>
                </li>
                <li>
                    <Link to={"/intro"}>소개</Link>
                </li>
                <li>
                    <Link to={"/hobby"}>취미</Link>
                </li>
                <li>
                    <Link to={"/community"}>커뮤니티</Link>
                </li>
                <li>
                    <Link to={"/sign-up"}>Sign Up</Link>
                </li>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;