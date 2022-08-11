import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/HomePage/Home'
import { Footer } from './components'
import Services from './pages/ServicesPage/Services'
import Products from './pages/ProductsPage/Products'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/products" element={<Products />} exact />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
