import { useState } from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Header from './Header'
import Products from './pages/Products'
import Clients from './pages/Clients'



function App() {


  return <BrowserRouter>
  <Header/>
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/clients' element={<Clients/>}/>

    
        
  </Routes>
  </BrowserRouter>
}

export default App
