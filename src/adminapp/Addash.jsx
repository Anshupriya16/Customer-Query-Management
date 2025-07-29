import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Adsidenav from '../component/Adsidenav'
import Topnav from '../component/Topnav';

const Addash = () => {

  const [u, setU]=useState(0);
  const [q, setQ]=useState(0);
  const [pen, setPen]=useState(0);
  const [pro, setPro]=useState(0);
  const [com, setCom]=useState(0);

  const total = async()=>{
  const uresponse = await fetch('http://localhost:8000');
  const ures=await uresponse.json();
  setU(ures.length);

  const qresponse = await fetch('http://localhost:8000/getquery');
  const qres= await qresponse.json();
  setQ(qres.length);

  const penresponse = await fetch('http://localhost:8000/ad/allpenquery');
  const penres= await penresponse.json();
  setPen(penres.length || 0)

  const proresponse = await fetch('http://localhost:8000/ad/allproquery');
  const prores= await proresponse.json();
  setPro(prores.length || 0)

  const comresponse = await fetch('http://localhost:8000/ad/allcomquery');
  const comres= await comresponse.json();
  setCom(comres.length || 0)
    
  }

  useEffect(()=>{
    total();
  },[])
  

  return (
    <>
    <div className='row vh-7'>
        <div className='col-sm-12 bg-dark text-light'>
          <Topnav/>
        </div>
    </div>
    <div className='row vh-93 '>
        <div className='col-2 h-100 back-dash scroll bg-danger'>
          <Adsidenav/>
        </div>
        <div className='col-10 h-100 bg-addash scroll bg-success'>
          <div className='row h-100 '>
            <div className='col-md-11 mx-auto my-auto'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col cards mx-auto rounded-3">                   
                    <div className="card-body ">
                      <h5 className="card-title">Total Users</h5>
                      <p className="card-text">{u}</p>
                    </div>
                </div>
                <div className="col cards mx-auto rounded-3">
                    <div className="card-body">
                      <h5 className="card-title">Total Queries</h5>
                      <p className="card-text">{q}.</p>
                    </div>
                </div>
                <div className="col cards mx-auto rounded-3">
                    <div className="card-body">
                      <h5 className="card-title">Total Pending Queries</h5>
                      <p className="card-text">{pen}</p>
                    </div>
                </div>
                <div className="col cards mx-auto rounded-3">
                    <div className="card-body">
                      <h5 className="card-title">Total Processing Queries</h5>
                      <p className="card-text">{pro}</p>
                    </div>
                </div>
                <div className="col cards mx-auto rounded-3">
                    <div className="card-body">
                      <h5 className="card-title">Total Completed Queries</h5>
                      <p className="card-text">{com}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Addash