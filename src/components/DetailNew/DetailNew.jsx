import React, { useState, useEffect } from 'react'
import {useUserContext} from '../../context/UserContext.jsx'
import { useParams } from 'react-router-dom'

const toast = (text)=>{
    Toastify({
        text: text,
        className: "info",
        style: {
            background: "#eb3434",
        }
        }).showToast();
}

const DetailNew = () => {
    const [loading, setLoading] = useState(true)
    const [article, setArticle] = useState({})
    const {user, setUser} = useUserContext()
    const { title } = useParams()

    const url = 'http://localhost:8080'

    useEffect(()=>{
        fetch(`${url}/api/news/${title}`, {
            headers: {
                Authentication: `Bearer ${user.token}`,
            }
        })
        .then((result)=>{
            if(result.status == 400){
                toast('Bad Request')
            }else if(result.status == 401){
                toast('Unauthorized')
                setUser(false)
            }else if(result.status == 500){
                toast('Server Error')
            }else if(result.status == 200){
                result.json().then((data) => {
                    setArticle(data.article)
                    setLoading(false)
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    },[])


    return (
        <>
        {
            loading?
            <div className='container'>
                <h1>Loading Article ... </h1>
                <h2></h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" className="img-fluid" alt="article img"></img>
                <p>Autor: loading...</p>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            :
            <div className='container'>
                <h1>{article.title}</h1>
                <img src={article.urlToImage} className="img-fluid" alt="article img"></img>
                <h5>Author: {article.author} {article.publishedAt}</h5>
                <h3>{article.description}</h3><br/>
                <h3>{article.content}</h3>
                <a target='_blank' href={article.url}>see more</a>
            </div>

        }
        </>
    )
}

export default DetailNew
