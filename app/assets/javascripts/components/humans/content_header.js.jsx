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

    if (trackStatus === "Track") {
      trackStatus = "Tracking";
      ApiUtil.createTrack(track);
    } else {
      trackStatus = "Untracking";
      ApiUtil.destroyTrack(track);
    }
      this.navigateToHumanShow();
    },

  render: function () {
    trackStatus = '';
    if (human.tracks.length === 0) {
      trackStatus = 'Track';
    } else {
      for (var z = 0; z < human.tracks.length; z++) {
        if (human.tracks[z].tracker_id !== CURRENT_USER_ID) {
          trackStatus = 'Track';
        }
        else {
          trackStatus = 'Untrack';
        }
      }
    }


    disabledStatus = '';
    if (trackStatus == 'Tracking' || trackStatus == 'Untracking') {
      disabledStatus = true;
    } else {
      disabledStatus = false;
    }

    return(
      <header className="content-header2">

        <h1>{human.fname+' '+human.lname}</h1>
        <button type='button' disabled = {disabledStatus} className="content-header-add-friend" onClick={this.handleTrackClick}>{trackStatus}</button>
      </header>
    );
  }
});
