var HumanContentHeader = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

  navigateToHumanShow: function () {
    var humanUrl = "/humans/" + human.id;
    this.history.pushState(null, humanUrl, {});

  },
  handleTrackClick: function () {
    event.preventDefault();

    var track = $.extend({}, this.state, { tracker_id: CURRENT_USER_ID, trackee_id: human.id }
    );

    ApiUtil.createTrack(track);
    this.navigateToHumanShow();

  },


  render: function () {

    trackStatus = "Untrack";
  if (human.tracks.toString() === "") {trackStatus = 'Track';}

    return(
      <header className="content-header">

        <h1>{human.fname + ' ' + human.lname}</h1>
        <button className="content-header-add-friend" onClick={this.handleTrackClick}>{trackStatus}</button>
      </header>
    );
  }
});
