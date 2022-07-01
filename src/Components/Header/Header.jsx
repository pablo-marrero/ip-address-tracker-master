import React from 'react'
import { Nav } from '../Nav/Nav'
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import imgUser from "../Nav/img/icon-user.png"
import { useAuth } from '../../Context/AuthContext';

export const Header = () => {

  const { logout,user } = useAuth()
  let myUser = JSON.parse(localStorage.getItem("myUser"));

  const handelLogout = async (e)=>{
    e.preventDefault()
    await logout()
  }

  const lookUser = (e)=>{
    e.preventDefault()
    console.log(myUser.email)
  }
  return (
    <header className='container-header'>
        <div>
           <h1 className='text-center'>IP Address Tracker</h1>
           <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img src={imgUser} alt="icon.png" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={lookUser}>Search History</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={handelLogout}>Logout</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
         </div>
        <Nav/>
    </header>
  )
}
