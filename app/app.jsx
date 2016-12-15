var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Components
var Main = require('Main');
var Timer = require('Timer');
var CountDown = require('CountDown');

//Load foundation and styles
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="countdown" component={CountDown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
