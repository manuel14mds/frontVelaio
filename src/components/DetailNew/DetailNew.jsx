import React from 'react'
import { useParams } from 'react-router-dom'

const DetailNew = ({info}) => {
    const { id } = useParams()
    console.log(id)
    return (
        <div className='container'>
            <h1>detail view id: {id} loading ... </h1>
            <h2>Elon Musk admits he didn't have a "specific number" for how much funding was needed to take Tesla private</h2>
            <img src="https://c.biztoc.com/p/2aa098d3b8c8a8d8/og.webp" className="img-fluid" alt="..."></img>
            <p>businessinsider.com</p>
            <h3>A courtroom sketch shows Tesla CEO Elon Musk testifying on January 23, 2023.Vicki Behringer/ReutersElon Musk admitted he didn't have a \"specific number\" for how much funding was needed to take Tesla … </h3>
        </div>
    )
}

export default DetailNew
