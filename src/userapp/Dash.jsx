import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sidenav from '../component/Sidenav';
import Utopnav from '../component/Utopnav';

const Dash = () => {


  const {id} = useParams();
  const [firstname, setFirstname]=useState("");
  const [lastname, setLastname]=useState("");
  const [email, setEmail]=useState("");
  //const [password, setPassword]=useState("");
  const getUser = async ()=>{
    const response = await fetch(`http://localhost:8000/${id}`);
    const data = await response.json()
    if(response.ok){
      setFirstname(data.firstname);
      setLastname(data.lastname);
      setEmail(data.email);
       }
  } 

  useEffect(()=>{
    getUser()
  },[])
  return (
    <>
    <div className='row vh-7 '>
        <div className='col-sm-12 bg-dark text-light back-login'>
          <Utopnav/>
        </div>
    </div>
    <div className='row vh-93'>
        <div className='col-2 h-100 scroll userdash'>
          <Sidenav/>
        </div>
        <div className='col-10 h-100 my-6 scroll back-login bg-success'>
          <div className='row p-5 align-center'>
            <div className='col-md-5 mx-auto bg-light p-4 rounded-5 my-5 back-login'>
              <h5 className='text-center '>User Details</h5>
              <div className='row my-3'>
                <div className='col-md-6'>FirstName :</div>
                <div className='col-md-6'>{firstname}</div>
              </div>
              <div className='row my-3'>
                <div className='col-md-6'>LastName :</div>
                <div className='col-md-6'>{lastname}</div>
              </div>
              <div className='row my-3'>
                <div className='col-md-6'>Email :</div>
                <div className='col-md-6'>{email}</div>
              </div>
              <div className='row my-3'>
                <div className='col-md-6 mx-auto text-center'>
                  <Link to={`/userdash/${id}`} className='btn btn-warning'>Edit</Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Dash