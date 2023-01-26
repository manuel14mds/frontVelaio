import React,{useEffect, useState} from 'react'
import { useUserContext } from '../../context/UserContext';

const toast = (text)=>{
    Toastify({
        text: text,
        className: "info",
        style: {
            background: "#eb3434",
        }
        }).showToast();
}

const Time = () => {
    const {user, setUser} = useUserContext()
    const [loading, setLoading] = useState(true)
    const [time, setTime] = useState({})

    const url = 'http://127.0.0.1:8080'

    const request = async()=>{
        fetch(`${url}/api/time`, {
            headers: {
                Authentication: `Bearer ${user.token}`,
            },
            credentials: 'same-origin'
        })
        .then((result)=>{
            if(result.status == 400){
                toast('weather, Bad Request')
            }else if(result.status == 401){
                toast('weather, Unauthorized')
                setUser(false)
            }else if(result.status == 500){
                toast('Server Error, weather')
            }else if(result.status == 200){
                result.json().then((data) => {
                    setTime(data)
                    setLoading(false)
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    useEffect(()=>{
        setTimeout(() => {
            request()
        }, 2000);
        
    },[])

    return (
        <div className='container'>
            <h1>weather</h1>
            <>
                {
                    loading?
                    <div className="card" style={{width:'18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">City, country</h5>
                            <h6>Loading ...</h6>
                            <h6 className="card-subtitle mb-2 text-muted spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                            </h6>
                            <p className="card-text">Time</p>
                            <div className="spinner-grow spinner-grow-sm" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="card" style={{width:'18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">{time.name}, {time.sys.country}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{time.main.temp} grados C</h6>
                            <p className="card-text">
                                Weather: {time.weather[0].description} <br/>
                                Wind Speed: {time.wind.speed} <br/>
                                Humidity: {time.main.humidity} <br/>
                            </p>
                        </div>
                    </div>
                }
            </>
        </div>
    )
}

export default Time
