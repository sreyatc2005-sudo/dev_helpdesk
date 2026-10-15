import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AppointmentCreate() {
  const [appointment,setAppointment]=useState(
    {
    "name":"",
    "phone":"",
    "email":"",
    "blood_test_type":"",
    "appointment_date":""
}

  )

  let redirect=useNavigate()

  function HandleSubmit(event){
    event.preventDefault()
    console.log(appointment);
    createAppointmentApi()
    
    
  }

  async function createAppointmentApi(){
    let response=await axios.post("http://127.0.0.1:8000/v1/appointments/",appointment)
    if(response.status>=200 && response.status<300){
      console.log(response.data);
      redirect("/appointment-list")
      
    }

  }

  return (
    <div>
         <form action="" onSubmit={HandleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text"
                        onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text"
                        onChange={(e) => setAppointment({ ...appointment, phone: e.target.value })}

                    />
                </div>

               <div>
                <label htmlFor="">Email</label>
                <input type="text" 
                        onChange={(e) => setAppointment({ ...appointment, email: e.target.value })}

                />
               </div>

                <div>
                    <label htmlFor="">Blood_test_type</label>
                    <input type="text"
                        onChange={(e) => setAppointment({ ...appointment, blood_test_type: e.target.value })}

                    />
                </div>

                 <div>
                    <label htmlFor="">Appointment_date</label>
                    <input type="text"
                        onChange={(e) => setAppointment({ ...appointment, appointment_date: e.target.value })}

                    />
                </div>
                <button type='submit'>Add</button>
            </form>
    </div>
  )
}

export default AppointmentCreate