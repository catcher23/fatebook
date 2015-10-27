(function(root) {
  'use strict';
  root.UserSideBar = React.createClass({
    render: function() {
      var humanUrl = '';
      return (
        <section className="content-sidebar">

          <a className="profile-picture">
            <strong className="online">Machine</strong>
            <img src={user.image_url} />
          </a>
          <div className="profile-info">
            <h2>{user.username}</h2>
            <p>
            </p>
          </div>
          <ul className="profile-nav">
            <li>
              <UserMapIndexItem user={user}/>
            </li>
            <br></br>
            <li>
              <UserNoteIndexItem user={user}/>
            </li>
          </ul>
          <ul className="profile-friends group">
            Tracked Humans:
            <br></br>
            { user.trackees.map(function (trackee) {
              humanUrl = "/#/humans/" + trackee.id;
              return <li><a href={humanUrl}className="thumb">
                <img src = {
                  trackee.image_url
                }
            />
          <span>{trackee.fname+ ' ' + trackee.lname}</span>
              </a>

            </li>;
            })}
          </ul>
        </section>
      );
    }
  });
}(this));
