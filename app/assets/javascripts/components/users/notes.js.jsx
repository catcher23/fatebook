(function(root) {
  'use strict';

  root.UserNotes = React.createClass({

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
