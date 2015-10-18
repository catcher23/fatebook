(function(root) {
  'use strict';

  root.Note = React.createClass({

    render: function () {

      return (
              <div classNameName="posts">
                <article className="post group">
                  <a href="#" className="post-thumb thumb" title="Sennacy">
                    <img src=""/>
                  </a>
                  <div className="post-body">
                    <h2><a href="#">{this.props.title}</a></h2>

                    <p>
                    {this.props.body}
                    </p>
                    <footer className="post-footer group">
                      <ul className="post-footer-info group">
                        <li><a href="#">Sennacy</a></li>
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
