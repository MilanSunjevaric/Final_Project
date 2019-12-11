import React from 'react'
import DashBoardCard from './DashBoardCard'
import { http } from '../../../Services/HttpService'


class TotalCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    getComments = () => {
        http.get('/comments')
            .then(res => this.setState({ comments: res.data }))
    }

    render() {
        return (
            <div>
                <DashBoardCard icon="message" number={this.state.comments.length} name="Total Comments" />

            </div>
        )
    }
}
export default TotalCom