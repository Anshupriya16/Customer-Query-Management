import React from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
  return (
    <>
     <div className='row h-100'>
        <div className='col-2 my-auto'>
            <h6>Admin Zone</h6>
        </div>
        <div className='col-2 my-auto ms-auto'>
            <h6><Link to={'/adlogin'} className='nav-link'><i class="fa-solid fa-right-to-bracket"></i>Logout</Link></h6>
        </div>
     </div>   
    </>
  )
}

export default Topnav