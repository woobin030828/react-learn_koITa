const fetchTodo = async (urls, options) => {
    const response = await fetch(urls, options)
    return response;
}

export default fetchTodo;