import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import gallery07 from '../component/img/emp-gallery-07.jpg'
import gallery2 from '../component/img/emp-gallery-2.jpg'
import gallery09 from '../component/img/emp-gallery-09.jpg'

const Carrer = () => {
  return (
    <>
    <Navbar/>
    <div className='row'>
      <div className='text-carrer'>
      <div className='a  w-50 position-absolute'>
        <a href='/' className='text-home'>Home /</a>
        <h3 className='ab text-light'>Carrers</h3>
      </div>
      </div>
    </div>
    <div className='row my-4'>
      <div className='col-md-6 ms-auto'>
        <h3 className='p-4'>Why Join Us</h3>
        <p className='para'>KARAM was founded with the ideal of saving lives. We are committed towards safety at work and we invite 
        like-minded individuals to join us in our journey towards positively impacting the world through our efforts.
        </p>
        <p className='para'>Join our team of 4000+ dedicated professionals on a mission to enhance occupational safety.
        </p>
      </div>
      <div className='col-sm-4 me-auto my-auto'>
         <div class="video-container">
            <video className='' controls width="500">
                <source src="../component/video/karam-career.mp4" type="video/mp4" />
                <source src={'../component/video/karam-career.mp4'} type="video/webm" />
            </video>
            </div>
      </div>
    </div>
    <div className='row p-5'>
            <h3 className='text-center p-3'>Culture at KARAM</h3>
            <p className='text-center'>KARAM provides a fulfilling work environment where employees can make a difference</p>
            <div className='col-md-4'>
                <img src={gallery07} className='w-100' />
            </div>
            <div className='col-md-4'>
            <img src={gallery2} className='w-100' />
            </div>
            <div className='col-md-4'>
            <img src={gallery09} className='w-100' />
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default Carrer