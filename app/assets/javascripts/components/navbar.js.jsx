(function(root) {
  'use strict';

  root.NavBar = React.createClass({
    mixins: [ReactRouter.History],

    handleLogoutClick: function() {
      root.ApiUtil.logout();
    },

    handleHomeClick: function() {
      this.history.pushState(null, "'/#/users/' + CURRENT_USER_ID",{});
    },

    render: function() {

      var userUrl = "/#/users/" + CURRENT_USER_ID;

      return (
         <nav className="header-nav group">
           <h1 className="header-logo" >

             <a>fatebook</a>
           </h1>
           <h1 className="header-searchbar">
             <a><SearchBar /></a>
           </h1>
           <ul className="header-list group">

             <li>
                <img className = 'header-img' src = {window.CURRENT_USER_IMG}></img>
               <a href ={userUrl}>{window.CURRENT_USER_USERNAME}</a>
             </li>

             <li onClick={this.handleLogoutClick}>

               <a href ="#">Logout</a>
             </li>
           </ul>
         </nav>
       );
     }
   });
 }(this));
