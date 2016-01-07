var React = require('react');
var UserMapIndexItem = require('./user_map_index_item.jsx');
var UserNoteIndexItem = require('./user_note_index_item.jsx');
module.exports = React.createClass({
  render: function () {

    return(


          <div className="profile-ribbon">
             <ul className="nav nav-pills">
               <li role="presentation"><UserMapIndexItem user={user}/></li>
               <li role="presentation"><UserNoteIndexItem user={user}/></li>
             </ul>
          </div>

    );
  }
});
