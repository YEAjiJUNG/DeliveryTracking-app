import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchPage from './client/components/views/SearchPage/SearchPage';
import SelectCompany from './client/components/views/SearchPage/SelectCompany';

function App({ dispatch }) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

function mapStateToProps(state, ownProps) {
  return state;
  // 어떤걸 return하면 그게 component의 props에 추가된다.
  //props에는 react-router 때문에 가져와진 애들이 포함된다.
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
