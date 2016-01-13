var React = require('react');

module.exports = React.createClass({
  render: function () {
    return(
      <header className="content-header">
        <h1>{this.props.user.username}</h1>
      </header>
    );
  }
});
