import React from 'react'
import DashBoardCard from './DashBoardCard'
import { http } from '../../../Services/HttpService'


class TotalUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    getPost = () => {
        http.get('/users')
            .then(res => this.setState({ users: res.data }))
    }

    render() {
        return (
            <div>
                <DashBoardCard icon="people" number={this.state.users.length} name="Users" />

            </div>
        )
    }
}
export default TotalUsers