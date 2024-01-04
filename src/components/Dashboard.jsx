import React from 'react'
import { Card } from './card'

export const Dashboard = () => {
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
                <span className='home-name'>Home</span>
            </div>
            <Card />

            <div className='space'></div>
        </div>

    )
}
