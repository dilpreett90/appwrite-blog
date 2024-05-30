import React,{useState,useEffect} from "react";
import Container  from '../container/Container'
import PostForm from "../post-form/PostForm"
import Service from "../../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";


function EditPost(){
  const[post,setPosts]=useState(null)
  const{slug}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    if(slug){
        Service.getPost(slug).then((post)=>{
            if(post){
                setPosts(post)
            }
        })
    }else{
        navigate("/")
    }
  },[slug,navigate])
  return post ? (
    <div className="py-8">
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ):null
}
export default EditPost 