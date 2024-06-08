import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../pages/Auth/Login/Login'
import Homepage from '../../pages/Homepage/Homepage'

const Dashboard = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<div>Not found</div>}></Route>
      </Routes>
    </>
  )
}

export default Dashboard