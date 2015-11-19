var HumanContentHeader = React.createClass({
  mixins: [ReactRouter.History],

  navigateToHumanShow: function () {
    var humanUrl = "/humans/" + human.id;
    this.history.pushState(null, humanUrl, {});

  },
  handleTrackClick: function () {
    event.preventDefault();

    $( ".content-header-add-friend" ).hide();
    this.disabledStatus = true;
    setTimeout(function(){
        $( ".content-header-add-friend" ).show();
    }, 2000);

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
          break;
        }
      }
    }


    this.disabledStatus = '';
    if (trackStatus == 'Tracking' || trackStatus == 'Untracking') {
      this.disabledStatus = true;
    } else {
      this.disabledStatus = false;
    }

    return(
      <header className="content-header2">

        <h1>{human.fname+' '+human.lname}</h1>
        <button type='button' disabled = {this.disabledStatus} className="content-header-add-friend" onClick={this.handleTrackClick}>{trackStatus}</button>

      </header>
    );
  }
});
