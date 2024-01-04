import React from 'react';
import { FaFolder } from "react-icons/fa";
import { RiBankCard2Fill } from "react-icons/ri";
import {BiSolidUserRectangle} from 'react-icons/bi';
import {RiFireFill} from 'react-icons/ri';
import {RiHotspotFill} from 'react-icons/ri';

export const Dashboard_sidebar_links = [
  
  {
    key: 'sales',
    label: 'Sales',
    icon: <FaFolder className='icon-links' />,
    submenus: [
      {
        title: 'Invoices',
        path: '/invoices',
        cName: 'submenu',
      },
      {
        title: 'Customers',
        path: '/customer',
        cName: 'submenu',
      },
      {
        title: 'Products',
        path: '/products',
        cName: 'submenu',
      },
      {
        title: 'Purchase Orders',
        path: '/purchase_orders',
        cName: 'submenu',
      },
    ]
  },
  {
    key: 'expenses',
    label: 'Expenses',
    icon: <RiBankCard2Fill className='icon-links'  />,
    submenus: [
      {
        title: 'Invoices',
        path: '/invoices',
        cName: 'submenu',
      },
      {
        title: 'Customers',
        path: '/customer',
        cName: 'submenu',
      },
      {
        title: 'Products',
        path: '/products',
        cName: 'submenu',
      },
      {
        title: 'Purchase Orders',
        path: '/purchase_orders',
        cName: 'submenu',
      },
    ]
  },
  {
    key: 'teams',
    label: 'Teams',
    icon: <BiSolidUserRectangle className='icon-links'  />,
    submenus: [
      {
        title: 'Invoices',
        path: '/invoices',
        cName: 'submenu',
      },
      {
        title: 'Customers',
        path: '/customer',
        cName: 'submenu',
      },
      {
        title: 'Products',
        path: '/products',
        cName: 'submenu',
      },
      {
        title: 'Purchase Orders',
        path: '/purchase_orders',
        cName: 'submenu',
      },
    ]
  },
  {
    key: 'invetory',
    label: 'Invetory',
    icon: <RiFireFill className='icon-links'  />,
    submenus: [
      {
        title: 'Invoices',
        path: '/invoices',
        cName: 'submenu',
      },
      {
        title: 'Customers',
        path: '/customer',
        cName: 'submenu',
      },
      {
        title: 'Products',
        path: '/products',
        cName: 'submenu',
      },
      {
        title: 'Purchase Orders',
        path: '/purchase_orders',
        cName: 'submenu',
      },
    ]
  },
  {
    key: 'reports',
    label: 'Reports',
    icon: <RiHotspotFill className='icon-links'   />,
    submenus: [
      {
        title: 'Invoices',
        path: '/invoices',
        cName: 'submenu',
      },
      {
        title: 'Customers',
        path: '/customer',
        cName: 'submenu',
      },
      {
        title: 'Products',
        path: '/products',
        cName: 'submenu',
      },
      {
        title: 'Purchase Orders',
        path: '/purchase_orders',
        cName: 'submenu',
      },
    ]
  },
];