import React, { useEffect, useState } from 'react'
import Sidenav from '../component/Sidenav';
import { Link, useParams } from 'react-router-dom';
import Utopnav from '../component/Utopnav';

const ViewPenQuery = () => {

   const {id}=useParams();
   const [penquery, setPenQuery]=useState([]);
   var [count, setCount]=useState(1);
   const getpenquery=async()=>{
    const response=await fetch(`http://localhost:8000/getpenquery/${id}`);
    const data= await response.json();
    if (data.msg==="Success") {
        setPenQuery(data.result);
        console.log(penquery);
    } 
   
   } 
   useEffect(()=>{
    getpenquery();
   },[])

  return (
    <>
    <div className='row vh-7' >
      <div className='col-sm-12  bg-dark text-light'>
      <Utopnav/>
      </div>
    </div>
    <div className='row vh-93'  >
      <div className='col-2 h-100 scroll bg-danger'>
        <Sidenav/>
      </div>
      <div className='col-10 h-100 scroll bg-success'>
        <div className='row h-100'>
        <div className='col-md-6 table-responsive mx-auto p-2 my-auto rounded-4 shadow-lg bg-light'>
            <table className='table table-light'>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Department</th>
                        <th>Subject</th>
                        <th>Query</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {penquery.map((e)=>(
                    <tr>
                        <td>{count++}</td>
                        <td>{e.department}</td>
                        <td>{e.subject}</td>
                        <td>{e.description}</td>
                        <td><Link to={'/'} className='btn btn-primary'>Edit</Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
        </div>
      </div>
    </div>

    </>
  )
}

export default ViewPenQuery;