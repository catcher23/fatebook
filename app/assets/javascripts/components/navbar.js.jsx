(function(root) {
  'use strict';

  root.NavBar = React.createClass({
    mixins: [ReactRouter.History],

    handleLogoutClick: function() {
      root.ApiUtil.logout();
    },

    handleHomeClick: function() {
      this.history.pushState(null, "/",{});
    },

    render: function() {

      var userUrl = "/#/users/" + CURRENT_USER_ID;

      return (
         <nav className="header-nav group">
           <h1 className="header-logo" onClick={this.handleHomeClick}>
             <a href="#">Fatebook</a>

           </h1>
           <h1 className="header-searchbar">
             <a><SearchBar /></a>
           </h1>
           <ul className="header-list group">

             <li>
               <a href ={userUrl}>{window.CURRENT_USER_USERNAME}</a>
             </li>
             <li>
               <a href="#">Notifications <strong className="badge">3</strong></a>
               <ul className="header-notifications">
                 <li><a href="#">Constance likes your photo.</a></li>
                 <li><a href="#">Tommy left you a comment.</a></li>
                 <li><a href="#">Jonathan is now following you.</a></li>
               </ul>
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
