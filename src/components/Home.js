import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { firestore } from "../firebase";


function Home() {
  const [posts,setPost] = useState([]);

  useEffect(()=>{
    firestore.collection('posts').get().then((snapshot) =>{
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });

        console.log('posts',posts);
    })
  },[]);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Punit</div>

      {posts.map((post,index) =>
        <div className="post" key={`post-${index}`}>
        <Link to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>

        <p>{post.subTitle}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
