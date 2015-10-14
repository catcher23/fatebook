(function(root) {
  'use strict';

  root.NavBar = React.createClass({
    mixins: [ReactRouter.History],

    handleLogoutClick: function() {
      root.ApiUtil.logout();
    },

    handleHomeClick: function() {
      this.history.pushState(null, "/");
    },

    render: function() {
      var current_user = current_user;
      return (
<div className='topbar'>
<div className='topbar-inner'>
  <div className='container canvas'>
        <ul className="nav">
          <li
            onClick={this.handleLogoutClick}>
        <a href ="#">Logout</a>
          </li>

          <li onClick={this.handleHomeClick}>
            <a href ="#home">Home</a>
          </li>

          <li>
            <SearchBar />
          </li>
        <li><a href ="#home">current_user</a></li>
        </ul>
      </div>
    </div>
    </div>
      );
    }
  });
}(this));
