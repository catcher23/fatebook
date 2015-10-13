window.Index = React.createClass({
  render: function () {
    return(
      <div>
        <div className="human-index">
          <NavBar />
          <SearchBar />

        </div>
        {this.props.children}
      </div>
    );
  }
});
