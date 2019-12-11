import React from 'react'

const DashBoardCard = (props) => {
    return (
        <div>
            <i class="material-icons">{props.icon}</i>
            <p>{props.number}</p>
            <p>{props.name}</p>

        </div>

    )
}
export default DashBoardCard