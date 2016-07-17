var React = require('react');
var ApiUtil = require('../../util/api_util.js');

module.exports = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {trackStatus: "Track"}
  },

  navigateToHumanShow: function () {
    var humanUrl = "/humans/" + human.id;
    this.history.pushState(null, humanUrl, {});

  },
  handleTrackClick: function () {

    $( ".content-header-add-friend" ).hide();
    this.disabledStatus = true;
    setTimeout(function(){
        $( ".content-header-add-friend" ).show();
    }, 2000);

    var track = $.extend({}, this.state, { tracker_id: CURRENT_USER_ID, trackee_id: human.id }
    );

    if (this.state.trackStatus === "Track") {
      this.setState({trackStatus : "Tracking"});

      ApiUtil.createTrack(track);
    } else {
      this.setState({trackStatus : "Untracking"});

      ApiUtil.destroyTrack(track);
    }
      this.navigateToHumanShow();
    },

  render: function () {

    if (human.tracks === undefined || human.tracks.length === 0) {
      this.state.trackStatus = 'Track';
    } else {
      for (var z = 0; z < human.tracks.length; z++) {
        if (human.tracks[z].tracker_id !== CURRENT_USER_ID) {
          this.state.trackStatus = 'Track';
        }
        else {
          this.state.trackStatus = 'Untrack';
          break;
        }
      }
    }


    this.disabledStatus = '';
    if (this.state.trackStatus == 'Tracking' || this.state.trackStatus == 'Untracking') {
      this.disabledStatus = true;
    } else {
      this.disabledStatus = false;
    }

    return(
      <header className="content-header2">

        <h1>{human.fname+' '+human.lname}</h1>
        <button type='button' disabled = {this.disabledStatus} className="content-header-add-friend" onClick={this.handleTrackClick}>{this.state.trackStatus}</button>

      </header>
    );
  }
});
