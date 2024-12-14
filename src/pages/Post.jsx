
import React from 'react'
import { useState , useEffect } from 'react'
import '../assets/css/componentes/card.css'
import {  buscar } from '../api/api'
import { useParams , useNavigate } from 'react-router-dom'

export const Post = ( {url}  ) => {

    const [post, setPost] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => {
            navigate('/page404')
        })
    }, [id , navigate])    

  return (
    <main className="container flex flex--center">
        <article className="card post">
                <h2 className="post-card__title"> 
                    {post.title}
                </h2>
                <p className="text__card">  
                    {post.body}
                </p>
        </article>
    </main>
  )
}
