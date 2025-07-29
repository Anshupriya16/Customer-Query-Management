import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import mask from '../component/img/Respiratory-Protection.jpg'
import gas from '../component/img/gas-detector-cover.jpg'
import head from '../component/img/Head-Protection.jpg'
import eye from '../component/img/products-cat.jpg'
import hearing from '../component/img/Hearing-Protection.jpg'
import face from '../component/img/Face-Protection.jpg'
import body from '../component/img/Full-Body-Harness.jpg'
import hooks from '../component/img/Hooks-and-Connectors.jpeg'
import lanyard from '../component/img/Lanyards.jpg'
import ancharoges from '../component/img/Anchorages.jpg'
import temporary from '../component/img/Temporary-Anchorage-Line-Systems.jpg'
import arrester from '../component/img/Retractable-Fall-Arrester-Blocks.jpg'

const Product = () => {
  return (
    <>
    <Navbar/>
    <div className='row'>
      <div className='text-product'>
      <div className='a  w-50 position-absolute'>
        <a href='/' className='text-home'>Home /</a>
        <h3 className='ab'>Products</h3>
      </div>
      </div>
    </div>
    <div className='row p-5'>
        <h2 className='text-center p-2'>Personal Protective Equipment</h2>
        <p className='text-center'>Protect yourself and your workers with reliable personal protective equipment (PPE)</p>
        <div className='col-md-4'>
            <img src={mask} />
            <h4 className='mask bg-danger p-2'>Respiratory Protection</h4>
            {/* <div className='product'>
                <p className='ho'>Protect yourself and your workers with reliable personal protective equipment</p>
                <a href=''>Learn More</a>
            </div> */}
        </div>
        <div className='col-md-4'>
            <div className='gas'>
                <img src={gas} className='' />
                <h4 className='mask bg-danger  p-2'>Gas Detection</h4>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='head'>
                <img src={head} className='' />
                <h4 className='mask bg-danger  p-2'>Head Protection</h4>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='gas'>
                <img src={eye} className='' />
                <h4 className='mask bg-danger  p-2'>Eye Protection</h4>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='gas'>
                <img src={hearing} className='' />
                <h4 className='mask bg-danger  p-2'>Hearing Protection</h4>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='gas'>
                <img src={face} className='' />
                <h4 className='mask bg-danger  p-2'>Face Protection</h4>
            </div>
        </div>
    </div>
    <div className='row p-5'>
        <h2 className='text-center p-2'>Fall Protection Equipment</h2>
        <p className='text-center'>Prevent workplace falls with our comprehensive fall protection solutions</p>
        <div className='col-md-4'>
            <img src={body} />
            <h4 className='mask bg-danger p-2'>Full Body Harnesses</h4>
            {/* <div className='product'>
                <p className='ho'>Protect yourself and your workers with reliable personal protective equipment</p>
                <a href=''>Learn More</a>
            </div> */}
        </div>
        <div className='col-md-4'>
            <div className='gas'>
                <img src={hooks} className='' />
                <h4 className='mask bg-danger  p-2'>Hooks & Connectors</h4>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='head'>
                <img src={lanyard} className='' />
                <h4 className='mask bg-danger  p-2'>Lanyards</h4>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='gas'>
                <img src={ancharoges} className='' />
                <h4 className='mask bg-danger  p-2'>Anchorages</h4>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='gas'>
                <img src={temporary} className='' />
                <h4 className='mask bg-danger  p-2'>Temporary Anchorage System</h4>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='gas'>
                <img src={arrester} className='' />
                <h4 className='mask bg-danger  p-2'>Retractable Fall Arrester Blocks</h4>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default Product