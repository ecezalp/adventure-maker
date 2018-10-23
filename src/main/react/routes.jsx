import * as React from 'react';
import {Route} from 'react-router-dom';
import Landing from "./components/pages/landing";

export default function Routes() {

  const landing = () => <Landing/>;

  return <div className="app-container">
    <Route exact path="/" component={landing}/>
  </div>;
}

