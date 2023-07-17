import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { Firestore } from "firebase/firestore";
import {firestore} from "../firebase";


function PostDetail() {
  const [post, setPost] = useState({});
  const {postId} =useParams();
  // code to get the post from the firestore
  useEffect(() => {
    firestore.collection('posts').doc(postId).get().then((snapshot) =>{
        console.log('snapshot',snapshot.data());
        setPost(snapshot.data());
    })
  },[])

  return (
    <div className="post-details"> PostDetail 
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    </div>
    
  );
}

export default PostDetail;
