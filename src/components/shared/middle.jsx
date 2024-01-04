import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

export const Middle = ({ link }) => {
    const [openFirstBatch, setOpenFirstBatch] = useState(false);
    const { pathname } = useLocation()
    return (

        <div className="second-batch">
            <div className={openFirstBatch ? 'sidebar-content open' : 'sidebar-content'}>
                <div className='link2'>
                    <div className="first-word">
                        {link.icon}
                        <span className='linkText'>{link.label}</span>
                    </div>
                    <FaChevronDown onClick={() => setOpenFirstBatch(!openFirstBatch)}
                        className={`down ${openFirstBatch ? 'rotate' : ''}`} />
                </div>
                <div className='options'>
                    {link.submenus.map((submenu, index) => (
                        <Link
                            to={submenu.path} key={index}
                            className={pathname === submenu.path ? 'option active' : 'option'}
                            style={{ textDecoration: 'none' }}
                        >
                            {submenu.title}

                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}


