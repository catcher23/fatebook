var root = document.getElementById("content");

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = React.createClass({
  mixins: [ReactRouter.History],
  componentDidMount: function() {
    this.history.pushState(null, "/users/"+CURRENT_USER_ID);
  },
  render: function(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var UserShow = require('./components/users/show');
var UserShow2 = require('./components/users/show2');
var HumanShow = require('./components/humans/show');
var HumanShow2 = require('./components/humans/show');
var HumanContentHeader = require('./components/humans/content_header');

var routes = (
    <Route path="/" component={App}>
        <Route path="/users/:userId" component={UserShow}/>
        <Route path="/users/:userId/note" component={UserShow2} />
        <Route path="/humans/:humanId" component={HumanShow} />
        <Route path="/humans/:humanId/note" component={HumanShow2} />
        <Route path="/track" components={HumanContentHeader} />
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
      document.getElementById("content")
  );
});
