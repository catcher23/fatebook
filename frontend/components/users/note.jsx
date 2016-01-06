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
      var human_img_url = this.props.human_image_url;
      var humanUrl = "/#/humans/" + this.props.human_id;


      return (
              <div className="posts">
                <article className="post group">
                  <a href={humanUrl} className="post-thumb thumb" title={this.props.username}>
                    <img src={human_img_url}/>
                  </a>
                  <div className="post-body">
                    <h2><a href={humanUrl}>{this.props.title}</a></h2>
                    <p>
                    {this.props.body}
                    </p>
                    <footer className="post-footer group">
                      <ul className="post-footer-info group">
                        <li><a href={humanUrl}>Left for {this.props.fname} {this.props.lname} {timeSince(Date.parse(this.props.created_at))} ago</a></li>
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
