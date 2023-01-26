import React from 'react'
import { Link } from 'react-router-dom'

const New = ({info}) => {
    return (
        <Link to={`/detail/${info.title}`} >
            <ul className="list-group list-group-horizontal-sm">
                <li className="list-group-item">{info.author}</li>
                <li className="list-group-item flex-fill">{info.title}</li>
            </ul>
        </Link>
    )
}

export default New
