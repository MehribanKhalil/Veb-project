import React from 'react'
import Button from '../Button'
import { MdArrowOutward } from "react-icons/md";
import  './index.scss'

const FilmListItem = ({date,film_name,show_time}) => {
    return (
        <div className='list_item'>

            <div className='row align-items-center'>

                <div className="listItem_date item col-12  col-lg-1">
                    <p>{date}</p>
                </div>


                <div className="listItem_name item col-12  col-lg-5">
                    <p>{film_name}</p>
                </div>


                <div className= "listItem_time item col-12 col-lg-2">
                    <p>{show_time.join(' / ')}</p>
                </div>

                <div className="listItem_link item col-12 col-lg-2">
                    <p>View More <MdArrowOutward /></p>
                </div>

                <div className="listItem_btn item col-12 col-lg-2">
                    <Button text='get tickets' color='black_btn' />
                </div>

            </div>
        </div>
    )
}

export default FilmListItem