import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../component/Footer'

const Adlogin = () => {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate =useNavigate();

    const adlog = async (e)=>{
      e.preventDefault();
      const ad= {username,password};
      const response=await fetch('http://localhost:8000/adlogin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(ad),
        
      });
      const data = await response.json();
      if(data.msg=="Admin Login Success"){
        setUsername("");
        setPassword("");
        alert(data.msg);
        navigate('/addash');
      }
      else{
        alert(data.msg);
      }
    }

  return (
    <>
    <Navbar/>
    <div className='row bg-admin'>
         <div className='col-md-4 back-admin mx-auto p-5 shadow-lg my-5 rounded-5 w-0'>
         <form onSubmit={adlog} className=''>
                <h4 className='adlog'><span className='text-danger adlog text-decoration-underline '>Admin</span> Login</h4>
                
                Enter Your Username :
                <input className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)} type="email" name="email" placeholder='Enter Your Username'/>
                <br/>
                Enter Your Password :
                <input className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} type="number" name="password" placeholder='Enter Your Password'/>
                <br/>
                <button className='mb-3 form-control btn btn-primary' type="submit">Submit</button>

                <Link to={'/registration'} className='text-dark'>Goto Dashboard</Link>
            </form>
         </div>
    </div>
    <Footer/>
    </>
  )
}

export default Adlogin