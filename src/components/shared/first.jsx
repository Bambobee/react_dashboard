import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import profile from './images/boy.webp';

export const First = () => {
  return (
<div className="first">
                <div className='avator'>
                    <img src={profile} className='image' alt="Avatar" />
                    <span className='text'>Hi,Benard</span>
                    <span className='icon'><FaArrowRightLong /></span>
                </div>
                <div className='rate'>
                    <div className='rate1'>
                        <div className='rate2'></div>
                    </div>
                </div>
                <div className='invoice'>
                    <FaCalendar className='calender' />
                    <p className='para'>Invoices</p>
                    <span className='icon'><FaArrowRightLong /></span>
                </div>
            </div>
  )
}
