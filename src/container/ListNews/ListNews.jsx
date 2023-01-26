import React, { useEffect, useState } from 'react'
import New from '../../components/New/New'

const toast = (text)=>{
    Toastify({
        text: text,
        className: "info",
        style: {
            background: "#eb3434",
        }
        }).showToast();
}

const ListNews = () => {
    const [news, setNews] = useState([])

    const url = 'http://localhost:8080'

    useEffect(()=>{
        fetch(`${url}/api/news`)
        .then((result)=>{
            if(result.status == 400){
                toast('weather, Bad Request')
            }else if(result.status == 401){
                toast('weather, Unauthorized')
            }else if(result.status == 500){
                toast('Server Error, weather')
            }else if(result.status == 200){
                result.json().then((data) => {
                    setNews(data.articles)
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },[])

    return (
        <div className='container'>
            <h2>News</h2>
            {
                news.length==0?
                <>
                    <h3>Loading News...</h3>
                    <div className="spinner-border" style={{width:'3rem', height:'3rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </>

                :
                news.map((data) => (<New key={data.publishedAt} info={data}></New>))
            }
        </div>
    )
}

export default ListNews
