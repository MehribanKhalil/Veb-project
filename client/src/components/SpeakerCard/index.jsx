import React from 'react'
import { FaInstagram, FaYoutube, FaVimeoV, FaTwitter } from "react-icons/fa";

import './index.scss'
const SpeakerCard = ({speakerName,speakerImage,speakerPosition}) => {
  return (
    <div className='speaker_card'>
      <div className="speaker_card_content">
        <div className='speaker_card_img'>
          <img src={speakerImage} alt="" />
        </div>
        <div className='speaker_card_overlay'>

          <div className='speaker_socials'>

            <div className="speaker_social_icon">
              <FaInstagram />
            </div>

            <div className="speaker_social_icon">
              <FaYoutube />
            </div>

            <div className="speaker_social_icon">
              <FaVimeoV />
            </div>

          </div>
          <h3 className='speaker_name'>{speakerName}</h3>
          <h4 className='speaker_position'>{speakerPosition}</h4>
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard