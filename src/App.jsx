import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailNew from './components/DetailNew/DetailNew'
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import Home from './container/Home/home'
import { useUserContext } from './context/UserContext'


function App() {
    const {user}= useUserContext()
    return (
        <>
            {user ?
                <BrowserRouter>
                    <div className="App">
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/detail/:id' element={<DetailNew />} />
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
