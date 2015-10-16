window.HumanIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {

    this.history.pushState(null, '/humans/' + this.props.human.id, {});
  },

  render: function () {
    return(
      <li onClick={this.showDetail} className="human-list-item">
        <p>{this.props.human.fname} {this.props.human.lname}  </p>
      </li>
    );
  }
});
