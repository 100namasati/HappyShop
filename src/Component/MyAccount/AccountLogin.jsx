import React, { Component } from 'react'
import Login from '../Login/Login'
import logo from '../../Images/account2.png'
import {Link} from 'react-router-dom'
import './accountLogin.css'

export default class AccountLogin extends Component {
  render() {
    return (
      <div>
     <div className='myAccount-Navbar'>
          <div className='myAccount-left' >
          <h4>My Account</h4>
           <div className='myAccount-text'>
              <span> <Link to='/'>Home</Link></span>
              <span >  <Link to='/myaccount' id="active">Account</Link></span>
             
            </div>
          </div>
        <div className='myAccount-img'>
            <img src={logo}/>
        </div>
     </div>

      {/* <Login/> */}
      </div>
    )
  }
}
