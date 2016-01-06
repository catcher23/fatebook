var React = require('react');

module.exports = React.createClass({

    render: function() {
var humanUrl = '';


      return (
        <section className="content-sidebar">

          <a className="profile-picture">
            <strong className="online">Human</strong>
            <img src={human.image_url} />
          </a>


<br></br>

          <div className = 'profile-thumbs clearfix'>
            <p id='profile-thumbs-info'>
                Profile Information
            </p>
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


          <div className = 'friends-thumbs clearfix'>
            <p id='friends-thumbs-info'>
                Tracked by:
            </p>

          <ul>
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
          </div>

        </section>
      );
    }
  });
