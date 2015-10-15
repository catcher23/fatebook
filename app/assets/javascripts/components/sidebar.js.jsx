(function(root) {
  'use strict';

  root.SideBar = React.createClass({
    mixins: [ReactRouter.History],

    handleLogoutClick: function() {
      root.ApiUtil.logout();
    },

    handleHomeClick: function() {
      this.history.pushState(null, "/",{});
    },

    render: function() {
      var that = this;
      return (

        <div className='container-fluid'>
        <ul className="sidebar">
          <li
            onClick={this.handleLogoutClick}>
        <a href ="#">Logout</a>
          </li>
          <li onClick={this.handleHomeClick}>
            <a href ="#home">Home</a>
          </li>
      
        <li><a href ="#home">{window.CURRENT_USER_USERNAME}</a></li>
        </ul>
      </div>


      );


    }
  });
}(this));
