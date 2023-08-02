import React from 'react'
import "./first.css"
import Testnav from './Testnav'

const First1 = () => {
  return (
     <>
      <Testnav/>
    <h1 className='tittle'>This is first component</h1>
    <h2 className='text-primary bg-warning p-4'>we are using functional component</h2>
     
    </>
  )
}

export default First1