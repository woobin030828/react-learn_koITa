import React, { useContext } from 'react';
import { PostContext } from '../../../context/PostContext';

const PostContextList = () => {
    const postContext = useContext(PostContext);
    console.log(postContext)
    return (
        <div>
            
        </div>
    );
};

export default PostContextList;