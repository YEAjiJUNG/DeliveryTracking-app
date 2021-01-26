import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './components/views/SearchPage/SearchPage';

function App() {
  return (
    <Router>
      <div className="App"> 
    <Switch>
      <Route path="/" component={(SearchPage)} />
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
