import React from 'react'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
import { Outlet } from 'react-router-dom'



function App() {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}

export default App
