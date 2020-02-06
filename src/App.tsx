import * as React from 'react';
import './App.css';
import CreateTweet from './components/CreateTweet';
import { TweetList } from './components/TweetList';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';
import Profile from './components/Profile';


interface State {
  tweets: object,
  loading: boolean,
}


class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
    }
  } 
  
  render() {
  
    return (
      <Router>
      <nav className="navbar">
        <ul>
        <li>
          <Link to="/tweet" style={{ textDecoration: 'none' }}><h5>Home</h5></Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}><h5>Change User</h5></Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route exact path="/">
          <Profile />
        </Route>
        <Route exact path="/tweet">
            <div className="App">
              <CreateTweet />
              <div className="feedBox">
                <TweetList />
              </div>
            </div>          
        </Route>
        
      </Switch>
    </Router>
  );
  }
}

export default App;
