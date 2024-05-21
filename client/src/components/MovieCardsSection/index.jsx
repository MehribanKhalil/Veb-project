import React from 'react'
import MovieCard from '../MovieCard'
import styles from './index.module.scss'
import { useFetch } from '../../hooks/useFetch'

const MovieCardsSection = () => {
    const baseUrl="http://localhost:3000/movieArticles"
    const [articleData]=useFetch(baseUrl)

  return (
    <div className={`${styles.cards_container} container`}>
        <div className="row">

            {
                articleData && 
                articleData.map((cardProperty)=>(
                    <MovieCard key={cardProperty.id} {...cardProperty}/>
                ))
            }
        
        </div>
        
    </div>
  )
}

export default MovieCardsSection