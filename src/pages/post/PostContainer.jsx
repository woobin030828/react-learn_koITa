import React from 'react';
import { Outlet } from 'react-router-dom';

const PostContainer = () => {
    return (
        <div>
            <div>배너</div>
            <Outlet />
        </div>
    );
};

export default PostContainer;