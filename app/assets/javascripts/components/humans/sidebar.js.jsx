(function(root) {
  'use strict';

  root.HumanSideBar = React.createClass({

    render: function() {
var humanUrl = '';
var humanImgUrl = '';
      return (
        <section className="content-sidebar">

          <a href="#" className="profile-picture">
            <strong className="online">Online</strong>
            <img src={human.image_url} />
          </a>

          <div className="profile-info">
            <h2>{human.fname + ' ' + human.lname}</h2>
            <p>
              <ul>
              <li>
              <b>Date of Birth</b>: {human.birthdate}
              </li>
              <br></br>
              <li>
              <b>Address</b>: {human.address}
              </li>
              </ul>

            </p>
          </div>

          <ul className="profile-nav">
            <li>Wall</li>
            <li>About</li>
            <li>Friends</li>
            <li>Photos</li>
          </ul>

          <ul className="profile-friends group">
            Tracked by:
            <br></br>
            { human.trackers.map(function (tracker) {
              humanUrl = "/#/users/" + tracker.id;
              humanImgUrl = "http://www.robohash.com/" + tracker.username;
              return <li><a href={humanUrl}  className="thumb">
                <img src = {
                  humanImgUrl
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
