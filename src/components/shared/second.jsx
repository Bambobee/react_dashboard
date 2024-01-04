import React from 'react'
import { AiFillPieChart } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Dashboard_sidebar_links } from '../../lib/mavigation';
import { Middle } from './middle';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

export const Second = () => {
    const { pathname } = useLocation();
    const [openThirdBatch, setOpenThirdBatch] = useState(false);
    return (
        <div className="second">

            <Link to={'/'} className={pathname === '/' ? 'link1 active' : 'link1'}>
                <AiFillPieChart className='chart' />
                <span className='linkText'>Home</span>
            </Link>

            {Dashboard_sidebar_links.map((link) => (
                <Middle key={link.key} link={link} />
            ))}

            <div className="third-batch">
                <div className={openThirdBatch ? 'sidebar-content open' : 'sidebar-content'}>
                    <div className='link2'>
                        <div className="first-word">
                            <IoSettings className='icon-links' />
                            <span className='linkText'>Settings</span>
                        </div>
                        <FaChevronDown onClick={() => setOpenThirdBatch(!openThirdBatch)}
                            className={`down ${openThirdBatch ? 'rotate' : ''}`} />
                    </div>
                    <div className='options'>
                        <Link
                            to={'/invoices'}
                            className={pathname === '/invoices' ? 'option active' : 'option'}
                            style={{ textDecoration: 'none' }}
                        >
                            Invoices

                        </Link>
                        <Link
                            to={'/customer'}
                            className={pathname === '/customer' ? 'option active' : 'option'}
                            style={{ textDecoration: 'none' }}
                        >
                            Customer

                        </Link>
                        <Link
                            to={'/products'}
                            className={pathname === '/products' ? 'option active' : 'option'}
                            style={{ textDecoration: 'none' }}
                        >
                            Products

                        </Link>
                        <Link
                            to={'/purchase_orders'}
                            className={pathname === '/purchase_orders' ? 'option active' : 'option'}
                            style={{ textDecoration: 'none' }}
                        >
                            Purchase Orders

                        </Link>

                    </div>
                </div>
            </div>


        </div>
    )
}
