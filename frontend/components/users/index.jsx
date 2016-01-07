var React = require('react');
var UserStore = require('../../stores/user.js');
var ApiUtil = require('../../util/api_util.js');
module.exports = React.createClass({
  getInitialState: function () {
    return { users: UserStore.all() };
  },

  _onChange: function () {
    this.setState({ users: UserStore.all() });
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchAllHumans();
    ApiUtil.fetchAllUsers();
  },

  compomentWillUnmount: function () {
    this.userListener.remove();
  },

  render: function () {

    return(
      <ul>

      </ul>
    );
  }
});
