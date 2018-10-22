import * as React from 'react';
import {Route} from 'react-router-dom';
import Skeleton from "./components/molecules/adventureCanvas";

export default function Routes() {

  const landing = () => <Skeleton/>;

  return <div className="app-container">
    <Route exact path="/" component={landing}/>
  </div>;
}

