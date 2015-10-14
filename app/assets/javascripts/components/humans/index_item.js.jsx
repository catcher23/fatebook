window.HumanIndexItem = React.createClass({
  mixins: [ReactRouter.History],
  showDetail: function () {
    this.history.pushState(null, '/human/' + this.props.human.id, {});
  },

  render: function () {
    return(
      <li onClick={this.showDetail} className="human-list-item">
        <p>Name: {this.props.human.fname} {this.props.human.lname}  </p>
      </li>
    );
  }
});
