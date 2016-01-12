var React = require('react');

module.exports = React.createClass({

    render: function () {
      function timeSince(date) {

          var seconds = Math.floor((new Date() - date) / 1000);

          var interval = Math.floor(seconds / 31536000);

          if (interval > 1) {
              return interval + " years";
          }
          interval = Math.floor(seconds / 2592000);
          if (interval > 1) {
              return interval + " months";
          }
          interval = Math.floor(seconds / 86400);
          if (interval > 1) {
              return interval + " days";
          }
          interval = Math.floor(seconds / 3600);
          if (interval > 1) {
              return interval + " hours";
          }
          interval = Math.floor(seconds / 60);
          if (interval > 1) {
              return interval + " minutes";
          }
          return Math.floor(seconds) + " seconds";
      }
      var user_img_url = this.props.user_image_url;
      var userUrl = "/#/users/" + this.props.user_id;

      return (
        <div className="posts">
          <article className="post group">
            <a href={userUrl} className="post-thumb thumb" title={this.props.username}>
              <img src={user_img_url}/>
            </a>
            <div className="post-body">
              <h2><a href={userUrl}>{this.props.title}</a></h2>

              <p>
              {this.props.body}
              </p>
              <footer className="post-footer group">
                <ul className="post-footer-info group">
                  <li><a href={userUrl}>{this.props.username}</a></li>
                  <li><time dateTime="2015-01-05">{timeSince(Date.parse(this.props.created_at))} ago</time></li>

                </ul>
                <ul className="post-footer-tools group">
                  <li><a href="#" className="icon-comment">Comment</a></li>
                  <li><a href="#" className="icon-reblog">Reblog</a></li>
                  <li><a href="#" className="icon-favorite">Favorite</a></li>
                </ul>
              </footer>
            </div>
          </article>
        </div>
      );
   }
  });
