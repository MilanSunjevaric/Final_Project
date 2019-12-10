
import Post from '../Model/Post'



const fetchPosts = () => {
    const url = "http://crud-api.hypetech.xyz/v1/posts"

    return fetch(url)
        .then(res => res.json())
        .then(apiPosts => {
            return apiPosts.map(apiPost => {
                return new Post(apiPost)

            })
        })
}

export { fetchPosts }