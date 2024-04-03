import React, { useState } from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import img from '../../img/profile.png'


const LogoSearch = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [searchValue,setSearchValue] = useState()
    const [searchedData,setSearchedData] = useState()
    const [seachedImg,setSearchedImg] = useState()

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER


    const handleSearch = async() => {
        handleShow()
        const uname = searchValue

        const {data} = await axios.get(`http://localhost:5000/user/search/${uname}`)
        setSearchedData(data[0].firstname + ' ' + data[0].lastname)
        setSearchedImg(data[0].profilePicture)
        console.log(searchedData);                
    }
    return (
  <>
<Container>
    <Row>
        <Col>
        <div className="LogoSearch">
            
    <img src={Logo} alt="" style={{width:'2rem', height:'2rem'}} />
    <div className="Search">
    

    
    <InputGroup className="mb-3">
        <Form.Control
        onChange={(e) =>setSearchValue(e.target.value)}
          placeholder="Search Amityhub"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>

    <div className="s-icon" style={{width:'2rem', height:'2rem'}} 
     onClick={() => handleSearch()}>
            < UilSearch />
        </div>
        </div>

        </Col>
    </Row>

</Container>

<Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
        
          <p>{`results found for ${searchValue}`}</p>
        </Modal.Header>
        
        <Modal.Body  style={{display:'flex', justifyContent:'space-between'}}>  
         <div>
         <img src={serverPublic + seachedImg } style={{width:'3rem', marginRight:'1rem', borderRadius:'50%'}} alt="" />{searchedData}
          </div> <Button style={{backgroundColor:'red'}}>Follow</Button></Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
  
  
  </>
  )
}

export default LogoSearch