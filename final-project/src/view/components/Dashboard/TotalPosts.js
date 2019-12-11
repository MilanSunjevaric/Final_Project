import React from 'react'
import DashBoardCard from './DashBoardCard'


class TotalPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: null
        }
    }

    render() {
        return (
            <div>
                <DashBoardCard icon="chrome_reader_mode" number={this.state.posts} name="Total Posts" />

            </div>
        )
    }
}
export default TotalPosts