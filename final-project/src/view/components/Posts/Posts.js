import React from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../../Services/PostService'
import Post from '../../../Model/Post'

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetchPosts()
            .then(postovi => this.setState({ posts: postovi }))
    }

    render() {
        const filteredPosts = this.state.posts.map(post => (
            <li>
                <h3 className="postTitle"><Link to={``}>{post.title}</Link></h3>
                <p className="titleBody">{post.body}</p>
            </li>

        ))



        return (<div className="main-div">
            <ul className="ul-posts">
                {filteredPosts}
            </ul>
        </div>)
    }
}




export default Posts