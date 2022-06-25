import React from 'react'
import './../resources/defaultlayout.css'
function DefaultLayout(props) {
  return (
    <div className='layout'>
   <div className='header'>
       <h1 > Ritu Singh Resume</h1>
   </div>
   <div className='content'>
   {props.children}
   </div>
    </div>
  )
}

export default DefaultLayout