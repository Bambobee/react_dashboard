import React, { useState, useEffect } from 'react';
import { GoClockFill } from 'react-icons/go';

export const Third = () => {
    const CurrentDateTime = () => {
        const [currentDateTime, setCurrentDateTime] = useState(new Date());
    
        useEffect(() => {
          // Update the current date and time every second
          const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
          }, 1000);
    
          // Clear the interval when the component unmounts
          return () => clearInterval(intervalId);
        }, []);
    
        // Format the date and time as per your requirement
        const formattedDateTime = `${currentDateTime.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })}, ${currentDateTime.toLocaleDateString([], {
          month: 'long',
          day: 'numeric',
        })}`;
    
        return formattedDateTime; // Return the formattedDateTime
      };
    
      // Call CurrentDateTime function to get the formattedDateTime
      const formattedDateTime = CurrentDateTime();
  return (
    <div className="last">
    <div className='show'>
      <span>  Show More</span>
    </div>
    <div className='second-last'>
      <span>
        <GoClockFill color='#B8C1CC'/>
      </span>
      <span className='time'>{formattedDateTime}</span>
    </div>
  </div>
  )
}
