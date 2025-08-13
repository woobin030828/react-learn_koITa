import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostListContainer = () => {
    const [posts, setPosts] = useState([]);
    useEffect (() => {
        const loadData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const posts = await response.json()
            return posts
        } 
        loadData()
            .then((posts) => posts.splice(0, 30))
            .then((posts) => setPosts(posts))
            .catch(console.error)
    }, [])

    const postList = posts.map(({id, title}, i) => (
        <li key={i}>
            <Link to={`/posts/read/${id}`}>
                {title}
            </Link>
        </li>
    ))

    return (
        <ul>
            {postList}
        </ul>
    );
};

export default PostListContainer;