import React from 'react'
import { FaInstagram, FaYoutube, FaVimeoV, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

import './index.scss'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_top'>
          <div className='row'>
            <div className='logo col-lg-6 '>
              <img
                src='https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png'
                alt=''
              />
            </div>
            <div className='col-lg-2'>
              <ul>
                <li>
                  <a href='#'>What We Do</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Help And FAQ</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2'>
              <ul>
                <li>
                  <a href='#'>What We Do</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Help And FAQ</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2'>
              <ul>
                <li>
                  <a href='#'>What We Do</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Help And FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer_bottom '>
          <div className='row align-content-center '>
            <div className='col-lg-6 d-flex flex-column '>
              <ul className='d-flex justify-content-start'>
                <li className='ps-2'>
                  <a href='#'>
                  <FaInstagram />

                  </a>
                </li>
                <li className='ps-2'>
                  <a href='#'>
                  <FaYoutube />
                  </a>
                </li>
                <li className='ps-2'>
                  <a href='#'>
                  <FaVimeoV />
                  </a>
                </li>
                <li className='ps-2'>
                  <a href='#'>
                  <FaTwitter />

                  </a>
                </li>
              </ul>
              <p>© 2022 QODE INTERACTIVE, ALL RIGHTS RESERVED</p>
            </div>
            <div className='col-lg-3'>
              <ul className=''>
                <li>
                  <a href='#'>1361 via del Parione</a>
                </li>
                <li>
                  <a href='#'>Florence CA</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <input  type='text' className='footer_input' placeholder={'Sign Up Newsletter'}
              />
              <MdArrowOutward />

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer