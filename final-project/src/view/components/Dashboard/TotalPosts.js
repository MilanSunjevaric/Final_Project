import React from 'react'
import DashBoardCard from './DashBoardCard'
import { http } from '../../../Services/HttpService'

class TotalPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []


        }

    }


    getPost = () => {
        http.get('/posts')
            .then(res => this.setState({ posts: res }))

    }

    render() {
        return (
            <div>
                <DashBoardCard icon="chrome_reader_mode" number={this.state.posts.length} name="Total Posts" />

            </div>
        )
    }
}
export default TotalPosts