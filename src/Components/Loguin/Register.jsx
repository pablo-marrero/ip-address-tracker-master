import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Form.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Register = () => {
    const [register, setRegister] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()
    const { signup, loginWithGoogle } = useAuth()

    const handelChange = (e)=>{
        setRegister({
            ...register,
            [e.target.name] : e.target.value 
        })
    }

    const handelSubmit = async (e)=>{
        e.preventDefault()
        try {
            await signup(register.email, register.password)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const goLogin = (e)=>{
      e.preventDefault()
      navigate("/login")
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
        <h3>Register to use our service</h3>
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
        <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit">
                Create
            </Button>
            <Button variant="" onClick={goLogin}>
                I have account
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
