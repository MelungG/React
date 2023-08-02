import React from 'react'
import { Link } from 'react-router-dom'

const Testnav = () => {
  return (
    <>
    <ul className='d-flex bg-secondary justify-content-around'>
       <li className='text-white'><Link to='/'className='text-white'>Home</Link></li> 
       <li className='text-white'><Link to='/test'className='text-white'>Test</Link></li>
       <li><Link to='/show'className='text-white'>Show</Link></li>
    </ul>
    </>
  )
}

export default Testnav