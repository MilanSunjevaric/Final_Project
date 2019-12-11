import React from 'react'
import DashBoardCard from './DashBoardCard'


class TotalUsers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: null
        }
    }

    render() {
        return (
            <div>
                <DashBoardCard icon="people" number={this.state.users} name="Users" />

            </div>
        )
    }
}
export default TotalUsers