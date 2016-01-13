var React = require('react');
var ApiUtil = require('../util/api_util.js');
module.exports = React.createClass({
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
