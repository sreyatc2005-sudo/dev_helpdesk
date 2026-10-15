import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AppointmentUpdate() {

      const [appointment,setAppointment]=useState(
        {
        "name":"",
        "phone":"",
        "email":"",
        "blood_test_type":"",
        "appointment_date":""
    }
    
      )
       let redirect =useNavigate()

       let {pk}=useParams()

       useEffect(()=>{getAppointmentDetailApi()},[pk])

       async function getAppointmentDetailApi(){
        let response=await axios.get(`http://127.0.0.1:8000/v1/appointments/${pk}/`)
        if(response.status>=200 && response.status<300){
            setAppointment(response.data)
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        AppointmentUpdateApi()

    }

    async function AppointmentUpdateApi(){
        let response=await axios.put(`http://127.0.0.1:8000/v1/appointments/${pk}/`,appointment)
        if(response.status>=200 && response.status<300){
            console.log(response.data);
            redirect("/appointment-list")
            
        }

    }
  return (
    <div>
         <form action="" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text"
                        value={appointment.name}
                        onChange={(e) => setAppointment({ ...appointment, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text"
                    value={appointment.phone}
                        onChange={(e) => setAppointment({ ...appointment, phone: e.target.value })}

                    />
                </div>

               <div>
                <label htmlFor="">Email</label>
                <input type="text"
                    value={appointment.email} 
                        onChange={(e) => setAppointment({ ...appointment, email: e.target.value })}

                />
               </div>

                <div>
                    <label htmlFor="">Blood_test_type</label>
                    <input type="text"
                    value={appointment.blood_test_type}
                        onChange={(e) => setAppointment({ ...appointment, blood_test_type: e.target.value })}

                    />
                </div>

                 <div>
                    <label htmlFor="">Appointment_date</label>
                    <input type="text"
                    value={appointment.appointment_date}
                        onChange={(e) => setAppointment({ ...appointment, appointment_date: e.target.value })}

                    />
                </div>
                <button type='submit'>Add</button>
            </form>
    </div>
  )
}

export default AppointmentUpdate