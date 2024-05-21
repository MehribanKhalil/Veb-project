import React from 'react'
import './index.scss'


const AudienceChoice = () => {
    return (

        <div className='audience_section'>

            <div className="container">
                <h4 className='audience_section_title'>AUDIENCE CHOICE</h4>

                <div className='audience_section_title_content'>
                    <div className="row justify-content-between align-items-center">
                        <div className="audience_left col-12 col-lg-6">

                            <video className='audience_video'  muted autoPlay loop >
                                <source src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/home4-video.mp4" type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="audience_right col-12 col-lg-6">
                            <h4>DOCUMENTARY</h4>
                            <h2>LIFE ON THE ISLAND</h2>
                            <p>documentary film by Mirela Bagaric / Croatia 2021</p>

                            <div className='audience_right_icons'>
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon1.png" alt="" />
                                <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AudienceChoice