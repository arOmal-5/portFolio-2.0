import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, likePost } from '../../api/PostRequest'
import likesound from '../../sound/likesound.mp3'
import img from '../images/proImg.png'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';




const Post = ({data}) => {
  const { user } = useSelector((state) => state.authReducer.authData)


 
 
  const [liked,setLiked] = useState(data.likes.includes(user._id))
  const [likes,setLikes] = useState(data.likes.length)

  // like and dislike post
 const handleLike = () => {
  
  likePost(data._id, user._id)
    .then(() => {
      setLiked((prev) => !prev);
      setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
    })
    .catch((error) => {
      console.error("Error liking post:", error);
    });
};
  // imported from material ui for post options
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  


  
  
  return (
    <div className="Post">
      <div className='fullPost'>


        <div>
        <div style={{display:'flex', gap:'1rem'}}>
        <img src={img} alt="" style={{width:'2rem'}} />
      <h5 style={{fontFamily:'monospace'}}>{data.firstName + data.lastName}</h5>
        </div>

        <div  className='postTime' style={{fontFamily:'monospace', marginLeft:'3rem'}}>
           <h6 style={{fontSize:'12px'}}>{data.createdAt.slice(0,10)}</h6>
           <h6 style={{fontSize:'12px'}}>at  {data.createdAt.slice(11,-8)}</h6>
            </div>
        </div>
      
            

            <div className="postOptions">
            <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
      >
        da
          <MenuItem  >
         delete post
            
          </MenuItem>
        
      </Menu>
            </div>
           
           </div>
        <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

      
        <div className="postReact" >
            <div className='postOptions'>
            <img src={liked?Heart: NotLike} alt="" style={{cursor:"pointer"}} onClick={handleLike} />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
            </div>
            
            
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>

            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post