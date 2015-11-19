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

          disabledStatus = true;
          console.log('1 disabledStatus = true');

      ApiUtil.createTrack(track);
    } else {
      window.trackStatus = "Untracking";
          disabledStatus = true;

            console.log('2 disabledStatus = true');
      ApiUtil.destroyTrack(track);
    }
      this.navigateToHumanShow();
    },

  render: function () {
    window.trackStatus = window.trackStatus || '';
    if (window.trackStatus == 'Tracking' || window.trackStatus == 'Untracking') {
      disabledStatus = true;
  console.log('3 disabledStatus = true');
    } else {
      disabledStatus = false;
    }



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
  

    return(
      <header className="content-header2">

        <h1>{human.fname+' '+human.lname}</h1>
        <button type='button' disabled = {disabledStatus} className="content-header-add-friend" onClick={this.handleTrackClick}>{window.trackStatus}</button>
      </header>
    );
  }
});
