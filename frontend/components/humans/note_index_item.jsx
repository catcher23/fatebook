var React = require('react');

module.exports = React.createClass({
  mixins: [ReactRouter.History],

  showDetail: function () {

    this.history.pushState(null, '/humans/' + this.props.human.id + '/note', {});

  },

  render: function () {
    var noteUrl = '/#/humans/' + this.props.human.id + '/note';
    return (
      <li onClick={this.showDetail} className="human-list-item">
        <a href={noteUrl}>
          Notes
        </a>
      </li>
    );
  }
});
