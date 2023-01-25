import React from 'react'
import New from '../../components/New/New'

const ListNews = () => {
    const news = [
        {id:1, author:'manuel', title:'gran permio', description:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'},
        {id:2, author:'adriana', title:'futbol', description:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'},
        {id:3, author:'patricia', title:'reinado', description:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'},
        {id:4, author:'ruth', title:'economia', description:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'},
        {id:5, author:'Adriene', title:'politica', description:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum'},]
    return (
        <div className='container'>
            <h2>List news</h2>
            {
                news.map((data) => (<New key={data.id} info={data}></New>))
            }
        </div>
    )
}

export default ListNews
