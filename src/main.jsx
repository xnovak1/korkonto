import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Concerts from "./pages/Concerts"
import Discography from "./pages/Discography"
import Contact from "./pages/Contact"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/korkonto/" element={<HomePage />} />
      <Route path="/korkonto/about-us" element={<AboutUs />} />
      <Route path="/korkonto/concerts" element={<Concerts />} />
      <Route path="/korkonto/discography" element={<Discography />} />
      <Route path="/korkonto/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
)
