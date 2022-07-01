import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from "react-router-dom"
import { auth } from '../../firebase'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Form.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()
    const { login, loginWithGoogle } = useAuth()

    const handelChange = (e)=>{
      setUser({
            ...user,
            [e.target.name] : e.target.value 
        })
    }

    const handelSubmit = async (e)=>{
        e.preventDefault()
        try {
           await login(user.email, user.password)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const createAccount = (e)=>{
        e.preventDefault()
        navigate("/register")
    }

    const handelLoguinGoogle = async (e)=>{
      e.preventDefault()
      try {
        await loginWithGoogle()
        navigate("/")
      } catch (error) {
        console.log(error)
      }
      
    }

  return (
        <div className='container-form d-flex flex-column justify-content-center align-content-center'>
        <Form className="formu border p-4" onSubmit={handelSubmit}>
            <h3>Enter for make your searches</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" onChange={handelChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" onChange={handelChange}/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <div className='d-flex justify-content-between'>
        <Button variant="primary" type="submit">
            Login
        </Button>
        <Button variant="" onClick={createAccount}>
            Create Account
        </Button>
        </div>
        <div className='d-flex justify-content-center mt-4'>
        <Button variant="primary" type="submit" onClick={handelLoguinGoogle}>
            Loguin with Google 
        </Button>
        </div>
      </Form>
      </div>
  )
}
