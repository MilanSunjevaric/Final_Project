import React from 'react'
import { http } from '../../../Services/HttpService'



class Author extends React.Component {
    constructor(props) {
        super(props)



        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {

        http.get('/users/' + this.props.userId)
            .then(user => this.setState({ user: user.data }))

    }

    render() {
        return (
            <div className='card'>
                {this.state.user.email}
            </ div>
        )
    }
}

export default Author

