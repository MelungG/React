import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Show, Test1 } from './Test1'
import First1 from './First1'

const Myroute = () => {
  return (
     <Router>
        <Routes>
            <Route path='' element={<First1/>}/>
            <Route path='test' element={<Test1/>}/>
            <Route path='show' element={<Show/>}/>
               

        </Routes>
      </Router>
   
  )
}

export default Myroute