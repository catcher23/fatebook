var ContentHeader = React.createClass({
  render: function () {
    return(
      <header className="content-header">

        <h1>{nameNow}</h1>
        <button className="content-header-add-friend">Add Friend</button>
      </header>
    );
  }
});
