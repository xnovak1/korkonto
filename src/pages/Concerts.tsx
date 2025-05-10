import React from 'react'
import './HomePage.css'
import { Link } from 'react-router'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function Concerts() {
  return (
    <>
      <Header />
      <main>
        <h1>Concerts</h1>
      </main>
      <Footer />
    </>
  )
}

export default Concerts
