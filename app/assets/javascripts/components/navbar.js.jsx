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
             <a href={userUrl}>Fatebook</a>

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
                 <li><a href="#">Neo likes your photo.</a></li>
                 <li><a href="#">Trinity left you a comment.</a></li>
                 <li><a href="#">Morpheus is now following you.</a></li>
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
