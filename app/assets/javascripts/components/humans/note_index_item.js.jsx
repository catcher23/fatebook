window.NoteIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showDetail: function () {

    this.history.pushState(null, '/humans/' + this.props.human.id + '/note', {});

  },

  render: function () {
    return (
      <li onClick={this.showDetail} className="human-list-item">
        Notes
      </li>
    );
  }
});
