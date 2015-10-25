(function(root) {
  'use strict';

  root.HumanSideBar = React.createClass({

    render: function() {
var humanUrl = '';


      return (
        <section className="content-sidebar">

          <a className="profile-picture">
            <strong className="online">Human</strong>
            <img src={human.image_url} />
          </a>

          <div className="profile-info">
            <h2>{human.fname + ' ' + human.lname}</h2>
            <br></br>
              <ul>
              <li>
              <b>Date of Birth</b>: {human.birthdate}
              </li>
              <br></br>
              <li>
              <b>Address</b>: {human.address}
              </li>
              </ul>


          </div>

          <ul className="profile-nav">
            <li>
              <a><MapIndexItem human={human}/></a>
            </li>
            <li>
              <a><NoteIndexItem human={human}/></a>
            </li>
          </ul>

          <ul className="profile-friends group">
            Tracked by:
            <br></br>
            { human.trackers.map(function (tracker) {
              humanUrl = "/#/users/" + tracker.id;

              return <li><a href={humanUrl}  className="thumb">
                <img src = {
                  tracker.image_url
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
