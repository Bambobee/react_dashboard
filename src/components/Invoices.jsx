import React from 'react'
import { MdAddBox } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export const Invoices = () => {
  return (
    <div className='dashboard'>
      <div className='year'>
        <select className='select-year'>
          <option value="0">2022</option>
          <option value="0">2023</option>
          <option value="0">2024</option>
          <option value="0">2025</option>
        </select>
      </div>
      <div className='combine'>
        <span className='title'>Dashboard</span>
        <span className='slash'>/</span>
        <span className='invoice-name'>Invoices</span>
      </div>
      <div >
        <div className='mother'>
          <span>Invoices</span>
          <div className='mother-child'>
            <div className='children'><MdAddBox className='child-inside' /></div>
            <span className='child-text'>New Invoice</span>
          </div>
        </div>
        <div className='invoice-table'>
          <div>
            <input type="search" className='invoice-input' placeholder='Search invoices' />
            <IoIosSearch className='search-icon' />
          </div>
          <div>
            <select className='invoice-input'>
              <option>All Invoices</option>
              <option value="">Invoices</option>
              <option value="">Invoices</option>
            </select>
          </div>
          <div className='date-input'>
            <label>From</label>
            <input type="date" className='invoice-input' />
          </div>
          <div className='date-input'>
            <label>To</label>
            <input type="date" className='invoice-input' />
          </div>
        </div>
        <div className='table'>
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>Status</th>
                <th>Date Created</th>
                <th>Due Date</th>
                <th>Invoice No.</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
