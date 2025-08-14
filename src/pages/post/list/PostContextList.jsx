import { useContext } from 'react';
import { PostContext } from '../../../context/PostContext';
import { Link } from 'react-router-dom';

const PostContextList = () => {
    const {state} = useContext(PostContext) //, actions, error, loading, refetch

    const postList = state.posts.map(({title, id}, i) => (
        <li key={i}><Link to={`/community/read/${id}`}>{title}</Link></li>
    ))

    return (
        <div>
            {postList}
        </div>
    );
};

export default PostContextList;