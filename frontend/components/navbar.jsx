var React = require('react');
var SearchBar = require('./searchbar');
var ApiUtil = require('../util/api_util.js');

module.exports = React.createClass({
    mixins: [ReactRouter.History],

    handleLogoutClick: function() {
      ApiUtil.logout();
    },

    handleHomeClick: function() {
      this.history.pushState(null, "'/#/users/' + CURRENT_USER_ID",{});
    },

    render: function() {
      var userUrl = "/#/users/" + CURRENT_USER_ID;
      return (
         <nav className="navbar navbar-default">
           <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" >
                fatebook
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <SearchBar showMap={this.props.showMap}/>
          
               <ul className="nav navbar-nav navbar-right">
               <li>
                 <a href ={userUrl}>{window.CURRENT_USER_USERNAME}</a>
               </li>

               <li onClick={this.handleLogoutClick}>
                 <a href ="#">Logout</a>
               </li>
               <li>
                 <a><img className='header-img' src = {window.CURRENT_USER_IMG}></img></a>
               </li>
             </ul>
         </div>
         </div>
         </nav>
       );
     }
   });
