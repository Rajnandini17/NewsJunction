import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark" > */}
      <nav className="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: '#1D2B53' }}>
      <div className="container-fluid">
    <Link className="navbar-brand" style={{ color: '#FAEF5D' }} to="/">NewsJunction </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/" style={{ color: '#FAEF5D' }}>Home</Link>
          </li>
        <li className="nav-item"><Link className="nav-link" to="/about" style={{ color: '#FAEF5D' }}>About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/business" style={{ color: '#FAEF5D' }}>Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{ color: '#FAEF5D' }}>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/general" style={{ color: '#FAEF5D' }}>General</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health" style={{ color: '#FAEF5D' }}>Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science" style={{ color: '#FAEF5D' }}>Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports" style={{ color: '#FAEF5D' }}>Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology" style={{ color: '#FAEF5D' }}>Technology</Link></li>
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}




