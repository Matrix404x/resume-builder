import React, { useState } from 'react'
import Steps from '../Components/Steps'
import Preview from '../Components/Preview'


function Form() {

  const[userInput,setUserInput]=useState({
    personalDetails:{
      name:"",
      jobTitle:"",
      location:"",
      email:"",
      phone:"",
      github:"",
      linkedIn:"",
      portfolio:""
    },
    education:{
      course:"",
      college:"",
      university:"",
      year:""
    },
    experience:{
      job:"",
      company:"",
      location:"",
      duration:""
    },
    skills:[],
    summary:""
  })



  return (
    <div>
     <div className="row p-5">
      {/* <div className="row">
        <div className="col-3"></div>
        <div className="col-8">
          <Preview/>

        </div>
        <div className="col-1"> </div>

       



      </div> */}

      <div className='row p-5'>
        <div className="col-6">

          <Steps userInput={userInput} setUserInput={setUserInput}/>

        </div>

        <div className="col-6">
          <Preview userInput={userInput}/>

        </div>

      </div>

     </div>
    </div>
  )
}

export default Form