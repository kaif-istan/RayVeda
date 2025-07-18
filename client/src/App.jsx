import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Pooja from './pages/Pooja'
import Header from './components/Header'


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pooja" element={<Pooja />} />
      </Routes>
    </Router>
  )
}
