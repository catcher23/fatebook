(function(root) {
  'use strict';

  root.Notes = React.createClass({

    render: function () {
      var notes = human.notes.reverse() || [];
      return (
        <div>
        {notes.map(function (note) {
          return <Note {...note} />;
        })}
      </div>
      );
   }
  });
}(this));
