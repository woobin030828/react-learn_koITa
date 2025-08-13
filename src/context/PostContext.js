import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();


export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [isUpdate, setIsUpdate] = useState(false)
    const [loding, setLoading] = useState(false)
    const value = {
        state: {posts : posts},
        actions : {setPosts : setPosts},
        refetch : {isUpdate : isUpdate, setIsUpdate : setIsUpdate},
        error : { error : error, setError : setError},
        loding : { loding : loding, setLoading : setLoading }
    }
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
        }, [isUpdate])
    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}   

export default PostProvider