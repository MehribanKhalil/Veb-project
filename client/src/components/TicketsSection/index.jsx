import React from 'react'
import './index.scss'
import Ticket from '../Ticket'
const TicketSection = () => {
    return (
        <div className='tickets_section'>
            <div className="container">
                <h4 className='tickets_section_title'>TICKETS</h4>

                <div className="tickets_content">
                    <div className="row">
                        
                        <Ticket 
                        ticketTitle='ONE DAY' 
                        ticketType='Regular ticket' 
                        TicketPrice='$10' 
                        backgroundColor='#d2cab9' 
                        circleColor="#EAA57F" />

                        <Ticket 
                        ticketTitle='VIP PASS' 
                        ticketType='Backstage pass' 
                        TicketPrice='$100' 
                        backgroundColor='#000000' 
                        circleColor='#EF9797' 
                        color='#fff'/>

                        <Ticket 
                        ticketTitle='7 DAYS PACK' 
                        ticketType='Regular ticket' 
                        TicketPrice='$60' 
                        backgroundColor='#F3F3F3' 
                        circleColor='#FDF24E' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketSection