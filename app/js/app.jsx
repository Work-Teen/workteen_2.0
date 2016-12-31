'use strict';

import React from 'react'
import Menu from './components/menu.jsx'
import Feed from './components/feeds/feed.jsx'
import Home from './components/feeds/home.jsx'
import Map from './components/feeds/map.jsx'
import PageNotFound from './components/errorPage.jsx'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'

//Target element to render the components
let target = document.getElementById('main-container');

let Header = React.createClass({
  render() {
    return (
      <div className="header"></div>
    );
  }
});

let App = React.createClass({
  goToTop() {
    $(document).scrollTop(0);
  },

  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <div className="container">
          <a className="goto-top" onClick={this.goToTop}></a>
          {this.props.children}
        </div>
      </div>
    )
  }
});




let redirectToChild = (location, replaceState) => {
  replaceState(null, '/feed');
}

//Render the components
React.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute  component={NewContent} onEnter={redirectToChild}/>
      <Route path="feed" component={Feed} />
      <Route path="home" component={Home} />
      <Route path="map" component={Map} />
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>

  , target);