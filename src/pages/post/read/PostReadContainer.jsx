import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import S from './style';

const PostReadContainer = () => {

    const [post, setPost] = useState({});
    const [loading, setLoding] = useState(false);
    const {ids} = useParams()
    
    useEffect (() => {
        const loadData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ids}`)
            const post = await response.json()
            return post
        } 
        loadData()
            .then((post) => {
                setPost(post)
                setLoding(true)
            })
            .catch(console.error)
    }, [])

    console.log(post)
    return ( loading ? 
        <div>
            <p>아이디 : {post.id}</p>
            <p>제목 : {post.title}</p>
            <p>내용 : {post.body}</p>
        </div> : <S.Bg><S.FontAwesomeIcon icon={faSpinner}/></S.Bg>
    );
};

export default PostReadContainer;