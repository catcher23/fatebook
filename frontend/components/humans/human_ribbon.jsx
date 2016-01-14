var React = require('react');
module.exports = React.createClass({

  render: function () {
    return(
      <div className="profile-ribbon pillbut">
         <ul className="nav nav-pills">
           <li role="presentation" onClick={this.props.showMap}><a>Map</a></li>
           <li role="presentation" onClick={this.props.showNotes}><a>Notes Left</a></li>
         </ul>
      </div>
    );
  }
});
