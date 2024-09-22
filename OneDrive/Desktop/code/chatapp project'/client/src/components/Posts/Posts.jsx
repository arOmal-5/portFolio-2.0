import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../Post/Post'
import {useDispatch, useSelector} from  'react-redux'
import { getTimelinePosts } from '../../actions/postAction'
import {useParams} from 'react-router-dom'


const Posts = () => {

  const params = useParams()
   
  const disptach = useDispatch()
  const {user} = useSelector((state) => state.authReducer.authData)
  let {posts , loading} = useSelector((state) => state.postReducer)

  useEffect(() => {
    disptach(getTimelinePosts(user._id))
  },[])
  
    if(!posts) return "No posts"
    if(params.id) posts =  posts.filter((post) => post.userId === params.id)
  

  return (
    <div className="Posts">
        {loading? "Fetching post...." : posts.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts