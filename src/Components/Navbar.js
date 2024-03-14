import React from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to ="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.About}</Link>
        </li>
      </ul>
      <form className="d-flex ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>

      </form>
      <div>
          <button type="button" className="btn btn-primary" onClick={props.chngBlue}></button>
          <button type="button" className="btn btn-success " onClick={props.chngGreen}></button>
          <button type="button" className="btn btn-danger" onClick={props.chngRed}></button>
          <button type="button" className="btn btn-warning" onClick={props.chngYellow}></button>
          </div>
      <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.changeText}</label>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}
// Navbar.propTypes = { title: PropTypes.string
// }

//  Navbar.defaultProps = {
//   title: "MyTextUtils"
// }             if you dont pass the title in app.js then it will default to "MyTextUtils" printed out.
// isRequired = true if you dont pass the value where you write isRequired it give error. like title: PropTypes.string.isRequired.
