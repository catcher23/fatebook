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
            
              <ul>
              <li>
              <b>Date of Birth</b>: <br></br>{human.birthdate}
              </li>
              <br></br>
              <li>
              <b>Address</b>: <br></br>{human.address}
              </li>
                <br></br>
              <li>
              <b>Email</b>: <br></br>{human.email}
              </li>
                <br></br>
              <li>
              <b>Phone</b>: <br></br>{human.phone}
              </li>
                <br></br>
              <li>
              <b>Screen Name</b>: <br></br>{human.screenname}
              </li>
              </ul>


          </div>

          <ul className="profile-nav">
            <li>
              <MapIndexItem human={human}/>
            </li>
            <br></br>
            <li>
              <NoteIndexItem human={human}/>
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
            /><span>{tracker.username}</span>
              </a>
            </li>;
            })}
          </ul>
        </section>
      );
    }
  });
}(this));
