import React from 'react'
import flag from './images/usa-flag1728.jpg';
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import uganda from './images/Flag_of_Uganda.svg.png';
import { FaStar } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { BiSolidBellRing } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from 'react';


export const Header = ({ setClose }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='header'>
      <div className='first-section'>
        <div className='logo'>
          <img src={flag} alt="logo" width={50} />
          <div className='separate'> <span>SOLis Group</span></div>
        </div>
        <div className='bars'>
        <FaBars onClick={() => setClose((prevClose) => !prevClose)} />
        </div>
      </div>

      <div className={open ? 'second-section open' : 'second-section'}>
        <div className='container'>
          <IoSearchOutline className='search' />
          <input type='text' className='text-input' placeholder='Search' />
          <FaArrowRightLong className='long' />
        </div>

        <div className='contain'>
         <div className='contain1'>
         <img src={uganda} alt="flag" className='flag' width={50} />
          <div className='group'>
            <FaStar className='star' />
            <span className='upgrade'>Upgrade</span>
          </div>
         </div>
         <div className='contain2'>
         <FaEnvelope className='message'/>
          <BiSolidBellRing className='notification' />
          <span className='notify'>2</span>
         </div>
          
        </div>
      </div>

      <div className='dot-format'>
      <div onClick={() => setOpen(!open)} className='dots'>
      <HiDotsVertical />
        </div>
      </div>

    </div>
  )
}
