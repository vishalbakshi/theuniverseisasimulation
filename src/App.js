import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Article from './Article';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => (
    <Router>
      <div className="App">
        <Header />

        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/:date"} component={Article} />
      </div>
    </Router>
)

export default App;
