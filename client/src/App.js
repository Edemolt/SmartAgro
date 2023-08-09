import { useState } from 'react'  
import { Route, Routes } from 'react-router-dom'

import Home from './routes/home_page/home_path'
import BookingsPath from './routes/Bookings/bookings_path'
import PricesPath from './routes/Prices/prices_path'
// import BookNowPath from './routes/BookNow/BookNow_path'
import BookNowPath from './routes/BookNow/booknow_path'
import AnalysisPath from './routes/Analysis/Analysis'
import SignUpPage from './routes/SignUp/signup_path'
import LoginPage from './routes/Login/login_path'
import LogoutPath from './routes/Logout/logout_path'
import Error_path from './routes/Errorpage/errorpage'
import About from './components/AboutUs/about_component'
import ContactUsPath from './routes/ContactUs/Contact_path'
import HumidityChart from './components/Analysis/humidity/humidity_component'
import WeatherChart from './components/Analysis/temperature/temp_component'

import './App.css'

function App(){
  return(
    <Routes>
      <Route path = '/' element={<Home/>}></Route>
      <Route path = '/bookings' element={<BookingsPath/>}></Route>
      <Route path = '/pricings' element={<PricesPath/>}></Route>
      <Route path = '/booknow' element={<BookNowPath/>}></Route>
      <Route path = '/analysis' element={<AnalysisPath/>}></Route>
      <Route path = '/signup' element={<SignUpPage/>}></Route>
      <Route path = '/login' element={<LoginPage/>}></Route>
      <Route path = '/logout' element={<LogoutPath/>}></Route>
      <Route path = '/contact' element={<About/>}></Route>
      <Route path = '/about' element={<ContactUsPath/>}></Route>
      <Route path = '/humidityChart' element={<HumidityChart/>}></Route>
      <Route path = '/tempChart' element={<WeatherChart/>}></Route>
      <Route path = '*' element={<Error_path/>}></Route>
    </Routes>
  )
}

export default App
