import React from 'react'
import DashBoardCard from './DashBoardCard'


class TotalCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: null
        }
    }

    render() {
        return (
            <div>
                <DashBoardCard icon="message" number={this.state.posts} name="Total Comments" />

            </div>
        )
    }
}
export default TotalCom