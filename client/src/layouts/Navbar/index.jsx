import React, { useState } from 'react'
import { FaInstagram, FaYoutube, FaVimeoV, FaTwitter } from "react-icons/fa";
import { TiSocialVimeo } from "react-icons/ti";
import './index.scss'

const Navbar = () => {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [dropdownStates, setDropdownStates] = useState({
    pages: false,
    portfolio: false,
    blog: false,
  });

  const handleDropdown = (e, dropdownName) => {
    e.preventDefault();
    setDropdownStates((prevState) => {
      const updatedStates = { ...prevState };
      
      Object.keys(updatedStates).forEach((name) => {
        if (name !== dropdownName) {
          updatedStates[name] = false;
        }
      });
  
      updatedStates[dropdownName] = !prevState[dropdownName];
  
      return updatedStates;
    });
  };
  

  return (
    <>
      <div className="navbar">

        <div className="navbar_content">
          <div onClick={() => setIsSideBarOpen(!isSideBarOpen)} className={` ${isSideBarOpen ? "open_btn" : ''}  navbar_toggle_btn`} >
            <div className='nav_btn_line1'></div>
            <div className='nav_btn_line2'></div>
          </div >

          <div className='navbar_logo'>
            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-width-20px.png" alt="" />
          </div>


          <div className='social_media_icons'>
            <div className="social_media_icon">
              <FaInstagram />
            </div>
            <div className="social_media_icon">
              <FaYoutube />
            </div>
            <div className="social_media_icon">
              <FaVimeoV />

            </div>
            <div className="social_media_icon">
              <FaTwitter />

            </div>
          </div>
        </div>

        
      </div>
      <div className={` ${isSideBarOpen ? "side_bar_active" : ''}  side_bar`} >
          <div className="side_bar_content">
            <ul className='side_bar_list'>
              <li className='side_bar_list_item'>
                <a href="">Home</a>
              </li>
              <li  onClick={(e) => handleDropdown(e,'pages')}
              className={` ${dropdownStates.pages ? 'side_bar_list_item_active' : ''}  side_bar_list_item`}>
                <a href="" >pages
                <ul className='side_bar_dropdown'>
                    <li><a href="" className='side_dropdown_item'>About Us</a></li>
                    <li><a href="" className='side_dropdown_item'>Our Team </a></li>
                    <li><a href="" className='side_dropdown_item'>Contact Us</a></li>
                </ul>
                </a>
              </li>
              <li onClick={(e) => handleDropdown(e,'portfolio')}
              className={` ${dropdownStates.portfolio ? 'side_bar_list_item_active' : ''}  side_bar_list_item`}>
                <a href="">portfolio
                <ul className='side_bar_dropdown'>
                    <li><a href="" className='side_dropdown_item'>Fullscreen Slider </a></li>
                    <li><a href="" className='side_dropdown_item'>Portfolio </a></li>
                    <li><a href="" className='side_dropdown_item'>Slider </a></li>
                </ul>
                </a>
              </li>
              <li onClick={(e) => handleDropdown(e,'blog')}
              className={` ${dropdownStates.blog ? 'side_bar_list_item_active' : ''}  side_bar_list_item`}>
                <a href="">blog 
                <ul className='side_bar_dropdown'>
                    <li><a href="" className='side_dropdown_item'> Product List </a></li>
                    <li><a href="" className='side_dropdown_item'> Product Single </a></li>
                </ul>
                </a>
              </li>
              <li className='side_bar_list_item'>
                <a href="">shop</a>
              </li>
              <li className='side_bar_list_item'>
                <a href="">landing</a>
              </li>
            </ul>
          </div>
        </div>




    </>
  )
}

export default Navbar