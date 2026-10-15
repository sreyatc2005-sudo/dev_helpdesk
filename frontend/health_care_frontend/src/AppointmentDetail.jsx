import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AppointmentDetail() {

    let {pk}=useParams()

    const [appointment,setAppointment]=useState()
    
    useEffect(()=>{AppointmentDetailApi()},[pk])

    async function AppointmentDetailApi(){
        let response=await axios.get(`http://127.0.0.1:8000/v1/appointments/${pk}/`)
        if(response.status>=200 && response.status<300){
            setAppointment(response.data)
        }
    }
  return (
    <div>
       {appointment && (
        <div>
                <p>{appointment.id}</p>
                <p>{appointment.name}</p>
                <p>{appointment.phone}</p>
                <p>{appointment.email}</p>
                <p>{appointment.blood_test_type}</p>
        </div>
       )}
    </div>
  )
}

export default AppointmentDetail