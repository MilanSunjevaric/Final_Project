import React from 'react'
import { authorService } from '../../../Services/AuthorService'
import User from '../Users/User'






class UserList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: []
        }
    }
    componentDidMount() {
        this.getAuthors()
    }


    getAuthors = () => {
        authorService.get()
            .then(res =>

                // console.log(res.data);
                this.setState({ authors: res.data }))

    }
    render() {



        return (<div className="main-div">
            {this.state.authors.map((author) => {
                return <User />
            })}
        </div>)



    }



}
// return (<div className="main-div">
//     {this.state.authors.map((author) => {
//         return <User name={author.name} />
//     })}
// </div>)






export default UserList
