import React from 'react'
import { Link } from 'react-router-dom'

const Utopnav = () => {
  return (
    <>
    <div className='row h-100'>
        <div className='col-2 my-auto'>
            User App
        </div>
        <div className='col-2 my-auto ms-auto'>
            <Link className='nav-link' to={'/login'}><i class="fa-solid fa-right-to-bracket"></i>Logout</Link>
        </div>
    </div>
    </>
  )
}

export default Utopnav