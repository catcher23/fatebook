(function(root) {
  'use strict';
  root.UserSideBar = React.createClass({
    render: function() {
      var humanUrl = '';
      return (
        <section className="content-sidebar">

          <a href="#" className="profile-picture">
            <strong className="online">Machine</strong>
            <img src={"https://www.robohash.org/"+user.username} />
          </a>
          <div className="profile-info">
            <h2>{user.username}</h2>
            <p>
            </p>
          </div>
          <ul className="profile-nav">
            <li>Wall</li>
            <li>About</li>
            <li>Friends</li>
            <li>Photos</li>
          </ul>
          <ul className="profile-friends group">
            Tracked Humans:
            { user.trackees.map(function (trackee) {
              humanUrl = "/#/humans/" + trackee.id;
              return <li><a href={humanUrl}  className="thumb">
                <img src = {
                  trackee.image_url
                }
            />
              </a>
            </li>;
            })}
          </ul>
        </section>
      );
    }
  });
}(this));
