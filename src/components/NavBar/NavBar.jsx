import { Link } from "react-router-dom"
import { useUserContext } from "../../context/UserContext"


const NavBar = () => {
    const {user, setUser}= useUserContext()
    const url = 'http://localhost:8080'

    const handleLogout = () => {
        fetch(`${url}/api/sessions/logout`, {
            headers: {
                Authentication: `Bearer ${user.token}`,
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(()=>setUser(false))
    }

    return (
        <>
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-danger" data-toggle="modal" data-target="#staticBackdrop">logout</button>
                    </li>
                </ul>
            </div>

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Logout</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Do you wanna logout?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={handleLogout} data-dismiss="modal" type="button" className="btn btn-danger">logout</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default NavBar
