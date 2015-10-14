window.Index = React.createClass({
  render: function () {
    return(
      <div>
        <div className="human-index">
          <NavBar />
          <HumansIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});
