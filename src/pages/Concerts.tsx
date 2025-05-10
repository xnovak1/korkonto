import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './HomePage.css'
import { Link } from 'react-router'

function Concerts() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Link to="/korkonto">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
      </div>
      <h1>Concerts</h1>
      <h3><Link to="/korkonto/about-us">About Us</Link></h3>
      <h3><Link to="/korkonto/concerts">Concerts</Link></h3>
      <h3><Link to="/korkonto/discography">Discography</Link></h3>
      <h3><Link to="/korkonto/contact">Contact</Link></h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
    </>
  )
}

export default Concerts
