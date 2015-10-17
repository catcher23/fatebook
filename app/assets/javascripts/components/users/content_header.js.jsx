var UserContentHeader = React.createClass({
  render: function () {

    return(
      <header className="content-header">

        <h1>{window.CURRENT_USER_USERNAME}</h1>
        <button className="content-header-add-friend">Add Friend</button>
      </header>
    );
  }
});
