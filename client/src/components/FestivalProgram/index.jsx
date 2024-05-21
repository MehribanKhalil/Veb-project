import React from 'react'
import FilmListItem from '../FilmListItem'
import { MdArrowOutward } from "react-icons/md";
import { useFetch } from '../../hooks/useFetch'

import './index.scss'


const FestivalProgram = () => {

    const baseUrl='http://localhost:3000/moviesProgram'
    
    const [moviesProgram]=useFetch(baseUrl)

    return (
        <div className='program_section'>
            <div className="container">
                <h4 className='program_section_title'>FESTIVAL PROGRAMME</h4>

                <div className='program_section_content'>

                {

                    moviesProgram &&
                    moviesProgram.map((movie)=>(
                     <FilmListItem key={movie.id} {...movie}/>
                        
                    ))
                }
                </div>

                <div className='program_section_view_all'>
                <p>View More <MdArrowOutward /></p>
                </div>

            </div>
        </div>
    )
}

export default FestivalProgram