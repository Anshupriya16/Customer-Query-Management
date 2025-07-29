import React from 'react'
import logo from '../component/img/karam-logo-01.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='row'>
        <div className='col-md-12'>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href=" ">
                  <img src={logo} />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto w-75">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/about'}>About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/service'}>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/product'}>Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link"  to={'/carrer'}>Carrer</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >Contact Us</a>
                  </li>
                </ul>
                <Link to={'/adlogin'} className='btn btn-danger text-light mx-3'>Admin</Link>
                <Link to={'/login'} className='btn btn-danger text-light'>Query</Link>
              </div>
            </div>
          </nav>
        </div>
    </div>
  )
}

export default Navbar