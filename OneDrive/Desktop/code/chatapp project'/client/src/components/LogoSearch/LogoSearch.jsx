import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const LogoSearch = () => {
  return (
  <>

<Container>
    <Row>
        <Col>


        <div className="LogoSearch">
    
    <img src={Logo} alt="" style={{width:'2rem'}} />
    <div className="Search">
        <input type="text" placeholder='#Explore' />
        <div className="s-icon">
            <UilSearch/>
        </div>
    </div>
        </div>

        </Col>
    </Row>
</Container>
  
  
  </>
  )
}

export default LogoSearch