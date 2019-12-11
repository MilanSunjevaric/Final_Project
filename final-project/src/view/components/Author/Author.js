import React from 'react'
import { http } from '../../../Services/HttpService'
import User from '../Users/User'


class Author extends React.Component {
    constructor(props) {
        super(props)

        this.authorId =

            this.state = {
                user: ""
            }
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {

        http.get('/user')
            .then(user => this.setState({ user: user.data }))

    }

    render() {
        return (
            <div className='card'>
                {this.state.user.map((user) => {
                    return <User name={user.name} />


                })}
            </ div>
        )
    }
}

export default Author

