import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import './index.scss'


const Ticket = ({ticketTitle,ticketType,TicketPrice,backgroundColor, circleColor,color }) => {
    return (
        <div className='col-12 col-lg-4'>
            <div className="ticket_content" style={{ backgroundColor,color }}>
                <div className="row">
                <div className="ticket_left col-9">
                    <h3 className='ticket_title'>
                        {ticketTitle}
                    </h3>
                    <div className="ticket_info">
                        <p> Type: {ticketType}</p>
                        <p>Price:{TicketPrice}</p>
                    </div>

                    <div className="additional_info">
                        <p>*Lorem ipsum dolores sit amet, dlores sit.</p>
                    </div>
                </div>

                <div className="ticket_right col-3">
                    <div className='circle' style={{ backgroundColor: circleColor }}></div>
                    <div className='ticket_buy'>
                        <span>Buy</span> 
                        <span><MdArrowOutward /></span>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default Ticket