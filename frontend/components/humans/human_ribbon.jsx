var React = require('react');
var MapIndexItem = require('./map_index_item.jsx');
var NoteIndexItem = require('./note_index_item.jsx');
module.exports = React.createClass({
  render: function () {
    return(
          <div className="profile-ribbon">
             <ul className="nav nav-pills">
               <li role="presentation"><MapIndexItem human={human}/></li>
               <li role="presentation"><NoteIndexItem human={human}/></li>
             </ul>
          </div>
    );
  }
});
