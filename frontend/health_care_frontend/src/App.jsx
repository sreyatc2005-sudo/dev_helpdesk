import React from 'react'
import AppointmentListCreate from './AppointmentListCreate'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppointmentCreate from './AppointmentCreate'
import AppointmentDetail from './AppointmentDetail'
import AppointmentUpdate from './AppointmentUpdate'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/appointment-list' element={<AppointmentListCreate></AppointmentListCreate>}></Route>
    <Route path='/appointment-add' element={<AppointmentCreate></AppointmentCreate>}></Route>
    <Route path='/appointment/:pk' element={<AppointmentDetail></AppointmentDetail>}></Route>
    <Route path='/appointment-update/:pk' element={<AppointmentUpdate></AppointmentUpdate>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App