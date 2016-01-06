var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return { users: UserStore.all() };
  },

  _onChange: function () {
    this.setState({ users: UserStore.all() });
  },

  componentDidMount: function () {
    UserStore.addUsersIndexChangeListener(this._onChange);
    UserStore.addUserDetailChangeListener(this._onChange);
    ApiUtil.fetchAllHumans();
    ApiUtil.fetchAllUsers();
  },

  compomentWillUnmount: function () {
    UserStore.removeUsersIndexChangeListener(this._onChange);
    UserStore.removeUserDetailChangeListener(this._onChange);
  },

  render: function () {

    return(
      <ul>

      </ul>
    );
  }
});
