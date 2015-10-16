var Note = React.createClass({
  render: function () {
    return (
      <div>
        <ul>
          <li>Title: {this.props.title}</li>
          <li>{this.props.body}</li>
        </ul>
      </div>
    );
  }
});
