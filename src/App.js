import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import MarkersContainer from './containers/MarkersContainer/MarkersContainer';


class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/markers" component={MarkersContainer} />
        <Route path="/" exact component={MarkersContainer} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
