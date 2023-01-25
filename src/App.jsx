import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import Home from './container/Home/home'

function App() {
    const [login, setLogin] = useState(true)

    return (
        <>
            {login?
                <BrowserRouter>
                    <div className="App">
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/login' element={<Login />}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            :
            <Login />
        }
        </>
    )
}

export default App
