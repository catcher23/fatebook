var React = require('react');

module.exports = React.createClass({
  mixins: [ReactRouter.History],

  showDetail: function () {

    this.history.pushState(null, '/users/' + this.props.user.id, {});

  },

  render: function () {
var userUrl = '/#/users/' + this.props.user.id;
    return (
      <li onClick={this.showDetail} className="user-list-item">
            <a href={userUrl}>
              Map
            </a>
      </li>
    );
  }
});
