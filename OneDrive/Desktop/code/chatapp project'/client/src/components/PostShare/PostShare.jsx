import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/uploadAction"; 
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostShare = () => {

  const {user} = useSelector((state) => state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
  const loading = useSelector((state) => state.postReducer.uploading)
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const dispatch = useDispatch()

  const desc = useRef()
  

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const reset = () => {
    setImage(null);
    desc.current.value=""
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId : user._id,
      desc : desc.current.value,
      firstName :user.firstname,
      lastName:user.lastname

    }

    if(image){
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
     try {
      // for uploaded images
       dispatch(uploadImage(data))
     } catch (error) {
      console.log(error);
     }

     dispatch(uploadPost(newPost))
     reset()
     toast.success('your post uploaded success!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    }
    
  };
  return (
    <div className="PostShare">
      <img src={user.profilePicture ? serverPublic + user.profilePicture  :serverPublic +"defaultProfile.png"} alt="" />
      <Container>
        <Row>
          <Col>
          <div>

          <InputGroup className="mb-3" 
          
           type="text" placeholder="">
        
        <Form.Control
         ref={desc}
         required
          placeholder="What's happening"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        <div className="postOptions">
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button className="button ps-button" 
          onClick={handleSubmit}
          disabled={loading}
          >{loading ? "Uploading" : "Share"}</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={URL.createObjectURL( image)} alt="" />
        </div>

      )}


      </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostShare;
