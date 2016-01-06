var React = require('react');

module.exports = React.createClass({
  mixins: [ReactRouter.History],

  showDetail: function () {

    this.history.pushState(null, '/humans/' + this.props.human.id, {});

  },

  render: function () {
var humanUrl = '/#/humans/' + this.props.human.id;
    return (
      <li onClick={this.showDetail} className="human-list-item">
            <a href={humanUrl}>
              Map
            </a>
      </li>
    );
  }
});
