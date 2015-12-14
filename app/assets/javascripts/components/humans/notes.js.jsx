(function(root) {
  'use strict';
  var sortByTime = function(a,b) {
    if (a.created_at < b.created_at)
      return -1;
    if (a.created_at > b.created_at)
      return 1;
    return 0;
  };

  root.Notes = React.createClass({


    render: function () {

      var notes = human.notes || [];
      notes = notes.sort(sortByTime);
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
