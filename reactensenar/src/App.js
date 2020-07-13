import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import Home from './Pages/Home'
import Search from './Pages/Search'
import Error404 from './Pages/Error404'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
          <Route component={Error404} />

        </Switch>
      </Router>
    )
  }
}

export default App;
