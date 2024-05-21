import React from 'react'
import styles from './index.module.scss'

const MovieCard = ({cardImg,cardTitle}) => {
    return (
        <div className= 'col-12 col-md-6 col-lg-4 mb-4'>

            <div className={styles.card_container}>

            <div className={styles.card_img}>
                <a href="">
                <img src={cardImg} alt="" />
                </a>
            </div>

            <div className={styles.card_content}>
                <h5><a href="">{cardTitle}</a> </h5>
                <div>
                    <span><a href="">Hodor Ulman</a></span>
                     <span> / </span> 
                     <span><a href="">Norway</a></span>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default MovieCard