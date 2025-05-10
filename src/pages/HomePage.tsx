import React from 'react'
import { Link } from 'react-router'
import './HomePage.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <p>New album out now!</p>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
