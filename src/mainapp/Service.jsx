import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import gridebanner from '../component/img/Mobile-grid.jpg'
import hands from '../component/img/Hands-On-Experience.png'
import real from '../component/img/Real-Time-Consultation.png'
import enhance from '../component/img/Enhanced-Awareness.png'
import time from '../component/img/Time-Cost-Efficiency.png'
import mobile from '../component/img/Mobile-Demo-VAN-01-03.jpg'
import operational from '../component/img/operational-day.png'
import sites from '../component/img/site-covered.png'
import city from '../component/img/cities-covered.png'
import kilometer from '../component/img/kilomiter.png'
import gallery1 from '../component/img/gallery-01.jpg'
import gallery2 from '../component/img/gallery-02.jpg'
import gallery3 from '../component/img/gallery-03.jpg'


const Service = () => {
  return (
    <>
    <Navbar/>
    <div className='row'>
      <div className='text-service'>
      <div className='a w-50 position-absolute'>
        <a href='/' className='text-service'>Home /</a>
        <h3 className='ser '>Mobile Demo Van</h3>
      </div>
      </div>
    </div>
    <div className='row my-4'>
      <div className='col-md-6 ms-auto'>
        <h3 className='p-3'>Overview</h3>
        <p className='para-ser'>KARAM strives to redefine safety practices, making them accessible and tangible for all. In pursuit of this objective, KARAM has introduced state-of-the-art Mobile Demo Vans, in multiple locations across India bringing safety education to the forefront. This ensures that individuals from all walks of life, especially workers, can engage with and comprehend the significance of personal protective equipment (PPE) and fall protection solutions. This initiative goes beyond showcasing products; it empowers workers with the knowledge and the right usage of safety products to create safer environments. From hands-on demonstrations to expert guidance, KARAM is dedicated to fostering a culture of safety that transcends boundaries.
        </p>
      </div>
      <div className='col-md-5 me-auto my-auto'>
        <img src={gridebanner} className='w-100 service-grid' />
      </div>
    </div>
    <div className='row bg-danger p-3'>
        <div className='col-md-3 p-3'>
          <div className='service'>
            <img src={hands} className='w-20 img'/>
            <div className='service-item'>
              <h4>Hands-On</h4>
            </div>
            <div className='service-item-global'>
              <h4>Experience</h4>
            </div>
          </div>
        </div>
        <div className='col-md-3 border-left p-3'>
        <div className='service-1'>
            <img src={real} className='w-20 img'/>
            <div className='service-item1'>
              <h4>Real-Time</h4>
            </div>
            <div className='service-item-global-1'>
              <h4>Consultation</h4>
            </div>
          </div>
        </div>
        <div className='col-md-3 border-left p-3'>
          <div className='service-2'>
            <img src={enhance} className='w-20 img'/>
            <div className='service-item-2'>
              <h4>Enhanced</h4>
            </div>
            <div className='service-item-global-2 '>
              <h4>Awareness</h4>
            </div>
          </div>
        </div>
        <div className='col-md-3 border-left p-3'>
        <div className='service-3'>
            <img src={time} className='w-20 img'/>
            <div className='service-item-3'>
              <h4>Time & Cost</h4>
            </div>
            <div className='service-item-global-3'>
              <h4>Efficiency</h4>
            </div>
          </div>
        </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <img src={mobile} className='w-100' />
            </div>
        </div>
        <div className='row bg-danger p-3'>
        <div className='col-md-3 p-3'>
          <div className='services'>
            <img src={operational} className='w-20 '/>
            <div className='services-item'>
              <h4>332+</h4>
            </div>
            <div className='services-item-global'>
              <h4>Operational Days</h4>
            </div>
          </div>
        </div>
        <div className='col-md-3 border-left p-3'>
        <div className='services-1'>
            <img src={sites} className='w-20 '/>
            <div className='services-item-1'>
              <h4>312+</h4>
            </div>
            <div className='services-item-global-1'>
              <h4>Sites Covered</h4>
            </div>
          </div>
        </div>
        <div className='col-md-3 border-left p-3'>
          <div className='services-2'>
            <img src={city} className='w-20 '/>
            <div className='services-item-2'>
              <h4>147+</h4>
            </div>
            <div className='services-item-global-2 '>
              <h4>Cities Covered</h4>
            </div>
          </div>
        </div>
        <div className='col-md-3 border-left p-3'>
        <div className='services-3'>
            <img src={kilometer} className='w-20 '/>
            <div className='services-item-3'>
              <h4>32123</h4>
            </div>
            <div className='services-item-global-3'>
              <h4>Kilometres Done</h4>
            </div>
          </div>
        </div>
        </div>
        <div className='row p-5'>
            <h3 className='text-center p-3'>Gallery</h3>
            <div className='col-md-4'>
                <img src={gallery1} className='w-100' />
            </div>
            <div className='col-md-4'>
            <img src={gallery2} className='w-100' />
            </div>
            <div className='col-md-4'>
            <img src={gallery3} className='w-100' />
            </div>
        </div>
        
    <Footer/>
    </>
  )
}

export default Service