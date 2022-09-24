import React from 'react'

const FlightItem = ({key, flightno, departuredate, arrivaldate, departurecity, destinationcity}) => {
  return (
    
    <div className='flex p-6 text-[#757575] border-b-2 border-[#757575] font-semibold text-lg'>
        <div className='flex-1'>{flightno}</div>
        <div className='flex-1'>{departuredate}</div>
        <div className='flex-1'>{arrivaldate}</div>
        <div className='flex-1'>{departurecity}</div>
        <div className='flex-1'>{destinationcity}</div>
    </div>
    
  )
}

export default FlightItem