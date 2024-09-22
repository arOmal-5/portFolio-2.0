import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
const Home = () => {
  return (
    <div className="Home">

      <Container>

        <Row>

        <Col lg={3}  >
        <ProfileSide/>
        </Col>

        <Col lg={7} >
        <PostSide/>
        </Col>
        
        <Col lg={2} >
        <RightSide/>
        </Col>
       

        </Row>
      

      </Container>
        
    </div>
  )
}

export default Home