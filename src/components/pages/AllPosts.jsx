import React,{useState,useEffect} from "react";
import Service from "../../appwrite/config";
import  Container  from '../container/Container'
import PostCard from "../PostCard";

function AllPosts(){
    const[posts,setPosts]=useState([])
    useEffect(()=>{},[])
    Service.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    return(
        <div className="w-full py-8">
            <container>
               <div className="flex flex-wrap">
                {posts.map((post)=>(
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard post={post}/>
                        </div>
                ))}
             
               </div>
               
            </container>
        </div>
    )
}
export default AllPosts