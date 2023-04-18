import { useState } from 'react'
import "./styles/App.css"
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'
import {Routes,Route,BrowserRouter as Router,Link} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop'
import "intersection-observer"
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/contacts' element={<Contacts/>}></Route>
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  )
}

export default App
