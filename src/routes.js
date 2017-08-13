import React, {Component} from 'react'
import asyncComponent from './components/AsyncComponent';
import {
  Route,
  Switch,
} from 'react-router-dom';

const AsyncHome = asyncComponent(() => import('./components/Home/Home'));
const AsyncAbout = asyncComponent(() => import('./components/About/About'));

class AllRoutes extends Component{
  render(){
    return (
      <div>
        <Switch>
          <Route path="/about" component={AsyncAbout}/>
          <Route path="/" exact component={AsyncHome}/>
        </Switch>
      </div>
    )
  }
}
export default AllRoutes;