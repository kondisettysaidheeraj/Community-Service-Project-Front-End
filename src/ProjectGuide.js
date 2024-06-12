import React from 'react'
import { useState,useEffect } from 'react';

function ProjectGuide() {
    const[data,setData]=useState([]);
    useEffect(()=>{fetch('http://localhost:8081/getAllTeamGuidance').then(res=>res.json().then(val=>setData(val)))},[]);
    return (
        <div className="App">
         
          <table id="projectguidetable">
             
                 <th>Id</th>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Email</th>
              
              {
                data.map((info)=>(
               <tr key={info.id}>  
               <td>{info.id}</td>
               <td>{info.name}</td>
               <td>{info.role}</td>
               <td>{info.department}</td>
               <td>{info.email}</td>
               
               </tr>

                ))
              }

          </table>

          <div >
            <div >
              <h3>project Guide</h3>
             <p><b>Mr.Rama krishna Reddy</b></p>
              <p>
                Mr. Rama Krishna Reddy has been a guiding force throughout our project, providing valuable insights and expertise in the field of environmental studies. His dedication and support have played a pivotal role in shaping our project's goals and direction.
              </p>
            </div>
            <div >
              <h3>Head of Department</h3>
              <p><b>Dr.Jhansi Vazram Bolla</b></p>
              <p>
              Dr.Jhansi Vazram Bolla, our esteemed Head of Department, has been a constant source of encouragement and guidance. Her leadership and commitment to academic excellence have inspired us to strive for the best in our project endeavors.
              </p>
            </div>
            <div>
             <h3>Principal</h3>
              <p><b>Dr.SREENIVASA KUMAR</b></p>
              <p>
              Dr.SREENIVASA KUMAR, our respected Principal, has provided unwavering support to our project's initiatives. His vision for holistic education and community engagement has motivated us to create meaningful impact through our project on air pollution awareness.
              </p>
            </div>
          </div>
    
          {/* Rest of your content */}
        </div>
      );
}

export default ProjectGuide