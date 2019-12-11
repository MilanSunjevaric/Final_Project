import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import Post from '../../../Model/Post'
import { http } from '../../../Services/HttpService'

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.getPosts()
    }
    getPosts = () => {
        http.get('/posts')
            .then(res =>
                this.setState({ posts: res.data })
            )
    }


    render() {

        return (<div className="main-div">
            {this.state.posts.map((post) => {
                return <Card src={post.imageUrl} title={post.title} text={post.text} userId={post.id} />
            })}
        </div>)


        // const filteredPosts = this.state.posts.map(post => (
        //     <li>
        //         <h3 className="postTitle"><Link to={``}>{post.title}</Link></h3>
        //         <p className="titleBody">{post.text}</p>
        //     </li>

        // ))



        // console.log(this.state.posts);
        // return (<div className="main-div">
        //     <ul className="ul-posts">
        //         {filteredPosts}
        //     </ul>
        // </div>)
    }
}




export default Posts