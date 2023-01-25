import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
