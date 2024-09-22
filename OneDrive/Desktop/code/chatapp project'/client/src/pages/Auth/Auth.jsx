import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from "../../actions/AuthAction";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Auth = () => {

  const loading = useSelector((state) => state.authReducer.loading)
  const [isSignUp, SetIsSignUp] = useState(false)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [data,setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  })

  const [confirmpass,setConfirmPass] = useState(true)

  const handleChange = (e) => {
    
    setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    
    } else {
      dispatch(logIn(data, navigate));
   
        
    }
  };

  const resetForm = () => {
    
    setConfirmPass(true)
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    })
  }

  return (
    <div className="Auth">

      <Container>

        <Row>
        <Col>
                      {/* left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1 style={{fontFamily:'monospace', fontWeight:'bolder' }}>AmityHub</h1>
          <h6 style={{fontFamily:'cursive'}}>Share yout stories with us </h6>
        </div>
      </div>
        </Col>

        <Col>
         {/* right side */}
      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3 style={{fontFamily:'monospace'}}>{ isSignUp ? "SIGN UP" : "LOG IN"}</h3>

       {
        isSignUp && 
        <div>

      <InputGroup className="mb-3">
        <Form.Control
          name="firstname"
          onChange={handleChange}
          value={data.firstname}
          placeholder="Firstname"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>



      <InputGroup className="mb-3">
        <Form.Control
          name="lastname"
          onChange={handleChange}
          value={data.lastname}
          placeholder="Lastname"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
       
      </div>
       }

        <div>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          name="username"
          onChange={handleChange}
          value={data.username}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
          
        </div>

        <div>
        <InputGroup className="mb-3">
        <Form.Control
        type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={data.password}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>


         
         {
          isSignUp && 

          <InputGroup className="mb-3">
          <Form.Control
          type="password"
            placeholder="Confirmpassword"
            onChange={handleChange}
            value={data.confirmpass}
            name="confirmpass"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
         
         
      
         }
        </div>
        <span style={{display : confirmpass ? "none" : "block", color:'red', fontSize:'12px', alignSelf:'flex-end'}}> *confirmpassword is not same </span>

        <div>
            <span style={{fontSize: '12px', cursor:"pointer"}} onClick={() => {SetIsSignUp((prev) => !prev) ;resetForm() }} >{isSignUp ? "Already have an account ? Login !" : "Don't have an acount ? Signup !"}</span>
        </div>
        <button className="button infoButton"  disabled ={loading}
        type="submit"> {loading ? "Loading..." : isSignUp ? "Sign up" : "Log in"}</button>
      </form>
    </div>
        </Col>
     
     


        </Row>

   

      </Container>

  

      
    </div>
  );
};



export default Auth;
