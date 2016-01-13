var React = require('react');
var UserNote = require('./note.jsx');
module.exports = React.createClass({

    render: function () {
      var user = this.props.user;

      var notes = user.notes || [];
      return (
        <div>

        {notes.map(function (note) {
        return <UserNote {...note} />;
        })}
      </div>
      );
   }
  });
