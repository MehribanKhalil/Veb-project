import React, { useState } from 'react'
import PopularMovieCard from '../PopularMovieCard'
import { useFetch } from '../../hooks/useFetch'
import './index.scss'


const PopularMovies = () => {

    const baseUrl = 'http://localhost:3000/popularFilms'

    const [popularMovies] = useFetch(baseUrl)

    const  [filterredData, setFilterredData] = useState('')

    const handleCategory = (e) => {
        e.preventDefault()
        const categoryValue = e.target.value
        setFilterredData(categoryValue==='showAll' ? '' : categoryValue);
    }

    return (
        <div className='popular_movies'>
            <div className='container'>
                <h4 className='popular_movies_title'>POPULAR MOVIES</h4>
                <div className='popular_movies_categories'>
                    <ul>
                        <li className='category_item'>
                            <button value='showAll' onClick={handleCategory} >Show All</button>
                        </li>
                        <li className='category_item'>
                            <button value='Comedy' onClick={handleCategory} >Comedy</button>
                        </li>
                        <li className='category_item'>
                            <button value='Documentary' onClick={handleCategory}>Documentary</button>
                        </li>
                        <li className='category_item'>
                            <button value='Fantasy' onClick={handleCategory}>Fantasy</button>
                        </li>
                        <li className='category_item'>
                            <button value='Romance' onClick={handleCategory}>Romance</button>
                        </li>
                        <li className='category_item category_last_item'>
                            <button value='Sci-Fi' onClick={handleCategory}>Sci-Fi</button>
                        </li>
                    </ul>


                </div>

                <div className="row">
                    {/* <PopularMovieCard /> */}

                    {
                        popularMovies &&
                        popularMovies.filter((item)=>(filterredData ? item.category.includes(filterredData) :true) )
                        .map((movie) => (
                            <PopularMovieCard key={movie.id} {...movie}
                            
                            movieStatus={movie.status ? movie.status : ''}
                            // className={` ${movie.status ? "popular_card_status_active" : ''}  popular_card_status`}
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default PopularMovies