var root = document.getElementById("content");

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./components/app');
var UserShow = require('./components/users/show');
var HumanShow = require('./components/humans/show');

var routes = (
    <Route path="/" component={App}>
        <Route path="/users/:userId" component={UserShow}/>
        <Route path="/humans/:humanId" component={HumanShow} />
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
      document.getElementById("content")
  );
});
