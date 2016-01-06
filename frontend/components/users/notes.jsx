var React = require('react');

module.exports = React.createClass({

    render: function () {

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
}(this));
