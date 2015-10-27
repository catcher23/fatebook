window.HumanIndexItem = React.createClass({
  mixins: [ReactRouter.History],

  showDetail: function () {
    this.history.pushState(null, '/humans/' + this.props.human.id, {});
  },

  render: function () {
    var userUrl = "/#/humans/" + this.props.human.id;
    return(
      <li onClick={this.showDetail} className="human-list-item">
        <a href={userUrl}>{this.props.human.fname} {this.props.human.lname}  </a>
      </li>
    );
  }
});
