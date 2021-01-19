import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function About(){
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul> 
        <hr/>
        <Switch>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/dashboard"><Dashboard /></Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home(){
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Dashboard(){
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
