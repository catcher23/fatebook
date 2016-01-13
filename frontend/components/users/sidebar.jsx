var React = require('react');

module.exports = React.createClass({
    render: function() {
      var user = this.props.user;
      var humanUrl = '';
      var n = 0;
      return (
        <section className="content-sidebar">
          <a className="profile-picture">
            <strong className="online">Machine</strong>
            <img src={user.image_url} />
          </a>

        <div className = 'profile-thumbs clearfix'>
          <p id='profile-thumbs-info'>
              Basic Information
          </p>
            <ul>
              <li>
              <b>Name</b>: {user.username}
              </li>
              <br></br>
              <br></br>
            <li>
            <b>Title</b>: {user.title}
            </li>
            <br></br>
            <br></br>
            <li>
            <b>Subsector</b>: {user.division}
            </li>
            </ul>
        </div>

          <div className = 'friends-thumbs clearfix'>
            <p id='friends-thumbs-info'>
                Tracked Humans
            </p>

          <ul>

            { user.trackees.map(function (trackee) {
              n+=1;
              humanUrl = "/#/humans/" + trackee.id;
              return <li key={n}><a href={humanUrl} className="thumb">
                <img src = {trackee.image_url}/>
                <span>{trackee.fname + ' ' + trackee.lname}</span>
                  </a>

            </li>;
            })}
          </ul>
          </div>

        </section>
      );
    }
  });
