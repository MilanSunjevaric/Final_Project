import React from 'react'
import TotalPosts from './TotalPosts'
import TotalCom from './TotalCom'
import TotalUsers from './Users'



const Dashboard = () => {
    return (
        <div>
            <TotalPosts />
            <TotalCom />
            <TotalUsers />
        </div>
    )
}


export default Dashboard