(function(root) {
  'use strict';

  root.Note = React.createClass({

    render: function () {

      var user_img_url = this.props.user_image_url;
      var userUrl = "/#/users/" + this.props.user_id;
      return (

              <div classNameName="posts">
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
                        <li><time datetime="2015-01-05">3 hours ago</time></li>
                        <li>541 views</li>
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
}(this));
