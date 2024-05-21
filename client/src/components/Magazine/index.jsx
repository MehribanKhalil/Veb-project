import React from 'react'
import './index.scss'
import Button from '../Button'

const Magazine = () => {
    return (
        <div className='magazine_container'>

            <div className="row">
                <div className="magazine_left col-12 col-md-6">
                    <div className="magazine_left_content">
                        <h4 className='magazine_title'>MAGAZINE</h4>


                        <h6 className='magazine_title_producers'><span>PRODUCERS</span> DECEMBER 10</h6>

                        <h2 className='magazine_text'>INTERVIEW WITH MOVIE PRODUCER PAUL GANGE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='magazine_btn'>
                            <Button text='get tickets' color='black_btn' />
                        </div>
                    </div>
                </div>
                <div className="magazine_right col-12 col-md-6 p-0 m-0">
                    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/blog-list-h4.jpg" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Magazine