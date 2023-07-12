

function CreatePost() {
  return (
    <div className="create-post">
      <h1>CreatePost</h1>
      <form>
            
            {/* title */}
        <div className="form-field">
            <label>Title</label>
            <input/>
        </div>
        
            {/* for subtitle */}
        <div className="form-field">
            <label>Sub Title</label>
            <input/>
        </div>

            {/* content */}
        <div className="form-field">
            <label>Content</label>
            <textarea></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
