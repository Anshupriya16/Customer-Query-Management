import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import aboutbanner from '../component/img/about-banner.jpg'
import core from '../component/img/core-value.png'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='row'>
      <div className='text'>
      <img src={aboutbanner} className='w-100' />
      <div className='a  w-50 position-absolute'>
        <a href='/' className='text-home'>Home /</a>
        <h4 className='ab'>About Us</h4>
      </div>
      </div>
    </div>
    <div className='row my-5'>
      <div className='col-md-6 ms-auto'>
        <h3 className='p-3'>Overview</h3>
        <p className='para'>KARAM is a leading global occupational safety brand with a vast portfolio of over 3500 certified products 
        conforming to multiple national and international standards and export our safety solutions to over 100 nations.
        </p>
        <p className='para'>Our team of over 4200 professionals have been relentlessly developing, testing, and evaluating products, 
        earning KARAM a reputation as one of the finest global companies that provide world-class personal protective equipment (PPE), 
        fall protection solutions and fixed-line systems. Beyond business, we are a responsible brand that values empowering people, 
        uplifting society and enriching the environment.
        </p>
      </div>
      <div className='col-sm-4 me-auto my-auto'>
      <div className="embed-responsive embed-responsive-4by3">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div className='row p-5 '>
      <div className='col-md-4 shadow-lg '>
        <h3 className='bg-danger text-light'>Mission</h3>
        <p className='p-2'>KARAM is deeply committed to protecting the lives of millions of workers working in the Industrial Environment 
        all across the globe by manufacturing and providing them with supreme quality of Personal Protective Equipment.</p>

          <p className='p-2' >We shall achieve this by manufacturing products that exceed the quality requirements laid down in various International
           standards and by brilliantly serving our esteemed Customers to answer their needs. Our Mission is to save millions of such
            lives globally and make a lasting impact in the field of Personal Safety.</p>
      </div>
      <div className='col-md-4'>
        <img src={core} className='w-100' />
      </div>
      <div className='col-md-4 shadow-lg'>
      <h3 className='bg-danger text-light'>Vision</h3>
      <p className='p-2'>We shall provide the entire range of Fall Protection Equipment to the Global market through sustained efforts in R&D, 
      manufacturing under cost effective, safe & systematic processes. We will reach out to Customer in more than 100 countries across 
      the globe providing prompt and effective services to them. We shall provide a full range of Personal Protective Equipment to our 
      Customers serving the needs of the Workers in India. We shall equip the Workers in every part of India exposed to various hazards 
      at their working environment, with complete knowledge on Personal Safety. </p>
      </div>
    </div>
    
   
   
    
    <Footer/>
    </>
  )
}

export default About