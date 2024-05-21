import React from 'react';
import styles from './index.module.scss'
import { LuPlay } from "react-icons/lu";
import Button from '../Button/index';


const Slide = ({title,production,writtenBy,anotherClass}) => {

    return (
        <div>
            <div className={`${styles.slide_container} ${anotherClass}`}>

                <div className="row">
                    <div className={`${styles.left} col-12  col-lg-9`}>
                        <h5 >{production}</h5>
                        <h1>{title}</h1>
                        <h6>{writtenBy}</h6>

                        <div className={styles.left_icons}>
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" />
                        </div>
                    </div>

                    <div className={`${styles.right} col-12  col-lg-3`}>
                        <div>
                            <h5>Film festival 2022 starts april</h5>
                            <div className={styles.line}></div>
                            <div className={styles.location}><span>Rome / 3 Locations / Seven days</span></div>
                        </div>

                        <div className='d-flex align-items-center justify-content-center' >
                            <div className='me-3'>
                                <span>Play</span>
                                <span className={styles.play_icon}><LuPlay /></span>
                            </div>

                            <div>
                                <Button text='get tickets' color='white_btn' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slide