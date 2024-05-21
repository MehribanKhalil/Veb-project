import React, { useState } from 'react'
import './index.scss'

const MobileNav = () => {

    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)
    const [dropdownStates, setDropdownStates] = useState({
        pages: false,
        portfolio: false
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
            <div className='mobile_nav'>
                <div className="container">
                    <div className="mobile_nav_content">
                        <div className='mobile_nav_logo'>
                            <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-main-light-height14px.png" alt="" />
                        </div>
                        <div onClick={() => setIsMenuBarOpen(!isMenuBarOpen)} className={` ${isMenuBarOpen ? "open_btn" : ''}  navbar_toggle_btn`} >
                            <div className='nav_btn_line1'></div>
                            <div className='nav_btn_line2'></div>
                        </div >
                    </div>
                </div>



                <div className={` ${isMenuBarOpen ? "active" : ''}  mobile_nav_menu`}>
                        <ul className= "mobile_menu_list">
                            <div className="container">
                            <li className='mobile_menu_list_item'>
                        <a href="">Home</a>
                    </li>
                    <li onClick={(e) => handleDropdown(e,'pages')}
              className={` ${dropdownStates.pages ? 'side_bar_list_item_active' : ''}  mobile_menu_list_item`}>
                        <a href="" >pages
                            <ul className='mobile_menu_dropdown'>
                                <li><a href="" className='side_dropdown_item'>About Us</a></li>
                                <li><a href="" className='side_dropdown_item'>Our Team </a></li>
                                <li><a href="" className='side_dropdown_item'>Contact Us</a></li>
                            </ul>
                        </a>
                    </li>
                    <li onClick={(e) => handleDropdown(e,'portfolio')}
              className={` ${dropdownStates.portfolio ? 'side_bar_list_item_active' : ''}  mobile_menu_list_item`}>
                        <a href="">portfolio
                            <ul className='mobile_menu_dropdown'>
                                <li><a href="" className='side_dropdown_item'>Fullscreen Slider </a></li>
                                <li><a href="" className='side_dropdown_item'>Portfolio </a></li>
                                <li><a href="" className='side_dropdown_item'>Slider </a></li>
                            </ul>
                        </a>
                    </li>
                    <li className='mobile_menu_list_item'>
                        <a href="">blog
                        </a>
                    </li>
                    <li className='mobile_menu_list_item'>
                        <a href="">shop</a>
                    </li>
                    <li className='mobile_menu_list_item'>
                        <a href="">landing</a>
                    </li>
                            </div>
                        </ul>
                    </div>
               
        
            </div>

           
        </>
    )
}

export default MobileNav