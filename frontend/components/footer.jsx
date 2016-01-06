var React = require('react');

module.exports = React.createClass({
  render: function () {

    return(
      <footer className="footer group">
        <small className="footer-copy">
          &copy; 2015 Danny Lau
        </small>
        <ul className="footer-links group">
          <li><a href="http://catcher23.github.io/">My Portfolio</a></li>
        </ul>
      </footer>
    );
  }
});
