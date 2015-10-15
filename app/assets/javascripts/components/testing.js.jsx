(function(root) {
  'use strict';

  root.Testing = React.createClass({
    mixins: [ReactRouter.History],

    handleLogoutClick: function() {
      root.ApiUtil.logout();
    },

    handleHomeClick: function() {
      this.history.pushState(null, "/",{});
    },

    render: function() {
      var that = this;
      return (
        <html>
  <head>

    <title>App Academy Friends | PHASE 9: Forms</title>

  </head>
  <body>

    <header className="header">
      <nav className="header-nav group">

        <h1 className="header-logo">
          <a href="#">Fatebook</a>
        </h1>

        <ul className="header-list group">
          <li>
            <a href="#">Notifications <strong className="badge">3</strong></a>
            <ul className="header-notifications">
              <li><a href="#">Constance likes your photo.</a></li>
              <li><a href="#">Tommy left you a comment.</a></li>
              <li><a href="#">Jonathan is now following you.</a></li>
            </ul>
          </li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>

      </nav>
    </header>

    <main className="content group">

      <header className="content-header">
        <h1>{nameNow}</h1>
        <button className="content-header-add-friend">Add Friend</button>
      </header>

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
            <img src="../shared/img/cat.jpg" />
          </a></li>
        <li><a href="#" className="thumb" title="Jonathan">
            <img src="../shared/img/cat.jpg" />
          </a></li>
        <li><a href="#" className="thumb" title="Tommy">
            <img src="../shared/img/cat.jpg" />
          </a></li>
        <li><a href="#" className="thumb" title="Constance">
            <img src="../shared/img/cat.jpg" />
          </a></li>
        <li><a href="#" className="thumb" title="Ned">
            <img src="../shared/img/cat.jpg" />
          </a></li>
        <li><a href="#" className="thumb" title="Kush">
            <img src="../shared/img/cat.jpg" />
          </a></li>
        <li><a href="#" className="thumb" title="CJ">
            <img src="../shared/img/cat.jpg" />
          </a></li>
        <li><a href="#" className="thumb" title="Jeff">
            <img src="../shared/img/cat.jpg" />
          </a></li>
        <li><a href="#" className="thumb" title="Simon">
            <img src="../shared/img/cat.jpg" />
          </a></li>
        </ul>

      </section>
      <section className="content-main">

        <form className="form group">

          <a href="#" className="form-thumb thumb" title="Thomas Anderson">
            <img src="../shared/img/cat.jpg" />
          </a>

          <fieldset className="form-fieldset">
            <div className="input">
              <label for="form-title">Post Title</label>
              <input id="form-title" type="text" value="Lorem Ipsum Dolor Sit Amet"/>
            </div>

            <div className="input">
              <label for="form-textarea">Post Body</label>
              <textarea id="form-textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</textarea>
            </div>

            <div className="submit">
              <button>Post To Wall</button>
              <span className="button-alternative">or <strong>Cancel</strong></span>
            </div>

          </fieldset>
        </form>

      </section>
    </main>

    <footer className="footer group">

      <small className="footer-copy">
        &copy; 2015 Danny Lau. All rights reserved.
      </small>

      <ul className="footer-links group">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
      </ul>

    </footer>

  </body>
  </html>
      );
    }
  });
}(this));
