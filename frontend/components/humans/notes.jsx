var React = require('react');
var Note = require('./note.jsx');
var sortByTime = function(a,b) {
  if (a.created_at < b.created_at)
  return -1;
  if (a.created_at > b.created_at)
  return 1;
  return 0;
};
module.exports = React.createClass({


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
