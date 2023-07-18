// import { useState } from "react";
import { styled } from "styled-components";
import { firestore } from "../firebase";
import { useFormInput } from "../hooks";

// import css from './Button.mdule.css';

const StyledButton = styled.button`
    height: 33px;
    background: ${(props) => props.primary ? '#4caf50': 'blue' };
    border: 0;
    color: #fff;
    padding: 8px;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
    ${(props) => props.primary && css`
        
    `};
`;


function CreatePost() {
    const title =useFormInput('');         //react hook
    const SubTitle =useFormInput('');         //react hook
    const content =useFormInput('');         //react hook
    
    function handleSubmit(e){   
        e.preventDefault();     //helps not to reload agin n again while submittimg or any input
        console.log('title',title);

        firestore.collection('posts').add({
            title : title.value,
            content : content.value, 
            SubTitle: SubTitle.value,
            createdAt : new Date()
        });
    }
    
    
    return (
    <div className="create-post">
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>   
            {/* title */}
        <div className="form-field">
            <label>Title</label>
            {/* <input value={title} onChange={(e) => setTitle(e.target.value)}/> */}
            <input {...title}/>
        </div>
        
            {/* for subtitle */}
        <div className="form-field">
            <label>Sub Title</label>
            {/* <input value={SubTitle} onChange={(e) => setSubTitle(e.target.value)}/> */}
            <input {...SubTitle}/>
        </div>

            {/* content */}
        <div className="form-field">
            <label>Content</label>
            <textarea {...content} ></textarea>
        </div>

        {/* <button className={css.createPostBtn}>Create Post</button> */}
        <StyledButton primary > Create Post </StyledButton>  {/*//dynamic styling*/}
      </form>
    </div>
  );
}

export default CreatePost;
