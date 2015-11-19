var HumanContentHeader = React.createClass({
  mixins: [ReactRouter.History],

  navigateToHumanShow: function () {
    var humanUrl = "/humans/" + human.id;
    this.history.pushState(null, humanUrl, {});

  },
  handleTrackClick: function () {
    event.preventDefault();
    flag = false;
    var track = $.extend({}, this.state, { tracker_id: CURRENT_USER_ID, trackee_id: human.id }
    );

    if (window.trackStatus === "Track") {
      window.trackStatus = "Tracking";

          this.disabledStatus = true;
      ApiUtil.createTrack(track);
    } else {
      window.trackStatus = "Untracking";
          this.disabledStatus = true;
      ApiUtil.destroyTrack(track);
    }
      this.navigateToHumanShow();
    },

  render: function () {

  if (window.trackStatus !== 'Tracking' && window.trackStatus !== 'Untracking') {
    if (human.tracks.length === 0) {
      window.trackStatus = 'Track';
    } else {
      for (var z = 0; z < human.tracks.length; z++) {
        if (human.tracks[z].tracker_id !== CURRENT_USER_ID) {
          window.trackStatus = 'Track';
        }
        else {
          window.trackStatus = 'Untrack';
        }
      }
    }
  }

    if (window.trackStatus == 'Tracking' || window.trackStatus == 'Untracking') {
      this.disabledStatus = true;
  
    } else {
      this.disabledStatus = false;
    }
    return(
      <header className="content-header2">

        <h1>{human.fname+' '+human.lname}</h1>
        <button type='button' disabled = {this.disabledStatus} className="content-header-add-friend" onClick={this.handleTrackClick}>{window.trackStatus}</button>
      </header>
    );
  }
});
