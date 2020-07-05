import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Landing} />
    </Switch>
  </Fragment>
);

export default App;
