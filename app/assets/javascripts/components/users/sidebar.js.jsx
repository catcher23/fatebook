(function(root) {
  'use strict';


  root.UserSideBar = React.createClass({


    render: function() {


      return (
        <section className="content-sidebar">

          <a href="#" className="profile-picture">
            <strong className="online">Online</strong>
            <img src={"https://www.robohash.org/"+window.CURRENT_USER_USERNAME} />
          </a>

          <div className="profile-info">
            <h2>{window.CURRENT_USER_USERNAME}</h2>
            <p>
            </p>
          </div>

          <ul className="profile-nav">
            <li><a href="#">Wall</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Friends</a></li>
            <li><a href="#">Photos</a></li>
          </ul>


          <ul className="profile-friends group">
            { user.trackees.map(function (trackee) {

              return <li><a href=""  className="thumb">
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
