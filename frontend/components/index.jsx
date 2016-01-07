var React = require('react');

module.exports = React.createClass({
  render: function () {

    return(
      <div>
        <div className="human-index">
          <HumansIndex />
          <SearchBar />
        </div>
        {this.props.children}
      </div>
    );
  }
});
