(function(root) {
  'use strict';

  root.SideBar = React.createClass({

    render: function() {
      var that = this;
      return (
        <section className="content-sidebar">

          <a href="#" className="profile-picture">
            <strong className="online">Online</strong>
            <img src={imageNow} />
          </a>

          <div className="profile-info">
            <h2>{nameNow}</h2>
            <p>
              {attrs}
            </p>
          </div>

          <ul className="profile-nav">
            <li><a href="#">Wall</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Friends</a></li>
            <li><a href="#">Photos</a></li>
          </ul>

          <ul className="profile-friends group">
            <li><a href="#" className="thumb" title="Thomas Anderson">
              <img src="" />
            </a></li>
          <li><a href="#" className="thumb" title="Jonathan">
              <img src="" />
            </a></li>
          <li><a href="#" className="thumb" title="Tommy">
              <img src="" />
            </a></li>
          <li><a href="#" className="thumb" title="Constance">
              <img src="" />
            </a></li>
          <li><a href="#" className="thumb" title="Ned">
              <img src="" />
            </a></li>
          <li><a href="#" className="thumb" title="Kush">
              <img src="" />
            </a></li>
          <li><a href="#" className="thumb" title="CJ">
              <img src="" />
            </a></li>
          <li><a href="#" className="thumb" title="Jeff">
              <img src="" />
            </a></li>
          <li><a href="#" className="thumb" title="Simon">
              <img src="" />
            </a></li>
          </ul>
        </section>
      );
    }
  });
}(this));
