import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { firestore } from "../firebase";
import styled from 'styled-components';

const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

const PostSubtitle =  styled.p`
  font-size: 13px;
`;



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
        setPost(posts);
    })
  },[]);

  return (
    <div className="home">
      <BlogHeading>Tech Blog</BlogHeading>
      {/* <button class="createPostBtn">This is a Button</button> */}
      <div id="blog-by">Punit</div>

      {posts.map((post,index) =>
        <div className="post" key={`post-${index}`}>
        <Link to={`/post/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>

        <PostSubtitle>{post.subTitle}</PostSubtitle>
        </div>
      )}
    </div>
  );
}

export default Home;
const styles = {
  heading:{
    marginTop  : 30,
    fontSize : 56
  },
}