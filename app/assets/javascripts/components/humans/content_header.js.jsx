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
    ApiUtil.createTrack(track);
  } else {
    ApiUtil.destroyTrack(track);
  }
    this.navigateToHumanShow();
  },


  render: function () {
trackStatus = '';
    if (human.tracks.length === 0) {
      trackStatus = 'Track';
    } else if (human.tracks[0].tracker_id !== CURRENT_USER_ID) {
      trackStatus = 'Track';
    } else {
      trackStatus = 'Untrack';
    }

    return(
      <header className="content-header2">

        <h1>{human.fname+' '+human.lname}</h1>
        <button className="content-header-add-friend" onClick={this.handleTrackClick}>{trackStatus}</button>
      </header>
    );
  }
});
