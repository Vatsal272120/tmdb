import React from 'react'
import '../Stylesheets/HomeScreen.css'
import Banner from './Banner'
import Navbar from './Navbar'

const HomeScreen = () => {
    return (
        <div className = 'homeScreen'>
            {/* Nav */}
            <Navbar/>
            <Banner/>
            {/* Banner */}
        </div>
    )
}

export default HomeScreen
