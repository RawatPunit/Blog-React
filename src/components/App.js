import { Switch, Route } from 'react-router-dom';
import {Navbar, Home, CreatePost, PostDetail} from './';
import {StyleRoot} from 'radium';

function App() {
  return (
    <StyleRoot>
    <div className="container">
      <Navbar/>
      <Switch>
      {/* //first Route as home component */}
        <Route exact path="/" component={Home}/>   
        <Route exact path="/post/:postId" component={PostDetail}/>    
        <Route exact path="/create-post" component={CreatePost}/>    
      </Switch>
    </div>
    </StyleRoot>
  );
}

export default App;
