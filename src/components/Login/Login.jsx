import { useUserContext } from "../../context/UserContext";

const toast = (text)=>{
    Toastify({
        text: text,
        className: "info",
        style: {
            background: "#eb3434",
        }
        }).showToast();
}
const Login = () => {
    const {user, setUser}= useUserContext()

    //const url = process.env.REACT_APP_BASE_URL
    const url = 'http://localhost:8080'
    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget)
        event.preventDefault()

        let data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        fetch(`${url}/api/sessions/login`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((result)=>{
            if(result.status == 400){
                toast('Bad Request')
            }else if(result.status == 401){
                toast('Unauthorized')
            }else if(result.status == 500){
                toast('Server Error')
            }else if(result.status == 200){
                result.json().then((data) => {
                    let user = data.user
                    user.token = data.token
                    setUser(user)
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='container'>
            <blockquote className="blockquote text-center">
                <p className="mb-0">Welcome, You have to login to access.</p>
                <footer className="blockquote-footer">Ask credentials <cite title="Source Title">manuel14mds@gmail.com</cite></footer>
            </blockquote>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
