import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AppointmentListCreate() {
    const [appointments,setAppointments]=useState()

    useEffect(()=>{AppointmentListApi()},[])

    async function AppointmentListApi(){
        let response=await axios("http://127.0.0.1:8000/v1/appointments/")
        setAppointments(response.data)
    }

    // async function AppointmentDEleteApi(){
    //     let response=await axios(`http://127.0.0.1:8000/v1/appointments/${id}/`)
    //     setAppointments(response.data)
    // }
  return (
    <div>
        {appointments&&appointments.map((a)=>(
            <div>
                <p>{a.id}</p>
                <p>{a.name}</p>
                <p>{a.phone}</p>
                <p>{a.email}</p>
                <p>{a.blood_test_type}</p>
<Link to={`/appointment/${a.id}`}>view</Link>
<Link to={`/appointment-update/${a.id}`}>update</Link>
            </div>
        ))}
    </div>
  )
}

export default AppointmentListCreate