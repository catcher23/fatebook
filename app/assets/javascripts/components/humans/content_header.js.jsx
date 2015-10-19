var HumanContentHeader = React.createClass({
  render: function () {

    return(
      <header className="content-header">

        <h1>{human.fname + ' ' + human.lname}</h1>
        <button className="content-header-add-friend">Track</button>
      </header>
    );
  }
});
