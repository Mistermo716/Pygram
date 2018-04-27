import React from 'react';
import './navbar.css';
import logo from './images/python-logo.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a href="/">
              <img className="logo" src={logo} alt="Python logo" />
            </a>
          </li>
          <span className="logo-divider">|</span>
          <li>
            <a className="pygram" href="/">
              Pygram
            </a>
          </li>
          <li className="login">
            <a href="photosubmit">Pic Submit</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
