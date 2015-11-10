window.UserNoteIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showDetail: function () {

    this.history.pushState(null, '/users/' + this.props.user.id + '/note', {});

  },

  render: function () {
    var noteUrl = '/#/users/' + this.props.user.id + '/note';
    return (
      <li onClick={this.showDetail} className="user-list-item">
        <a href={noteUrl}>
          Notes left
        </a>
      </li>
    );
  }
});