import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../../context/PostContext';

const PostContextRead = () => {

  const { postId } = useParams()
  const {state, actions, error, loading, refetch} = useContext(PostContext)

  if(!loading) return <p>로딩중...</p>
  const post = state.posts?.find((post) => post.id === Number(postId))
  if(!post) return <p>게시물이 없습니다.</p>
  const {id, title, body} = post;

  return (
    <div>
      <p>아이디: {id}</p>
      <p>제목: {title}</p>
      <p>내용: {body}</p>
    </div>
  );
};

export default PostContextRead;