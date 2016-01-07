var React = require('react');
var UsersIndex = require('./index.jsx');
var NavBar = require('../navbar.jsx');
var UserContentHeader = require('./content_header.jsx');
var UserRibbon = require('./user_ribbon.jsx');
var UserSideBar = require('./sidebar.jsx');
var UserMap = require('./map.jsx');
var Footer = require('../footer.jsx');
var UserStore = require('../../stores/user.js');
var ApiUtil = require('../../util/api_util.js');
module.exports = React.createClass({
    mixins: [ReactRouter.History],

    getStateFromStore: function () {

      return { user: UserStore.find(parseInt(this.props.params.userId)) };
    },

    _onChange: function () {
      this.setState(this.getStateFromStore());
    },

    getInitialState: function () {
      return this.getStateFromStore();
    },

    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchSingleUser(parseInt(newProps.params.userId));
    },

    componentDidMount: function () {
      this.userListener = UserStore.addListener(this._onChange);
      ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));


    },

    componentWillUnmount: function () {
      this.userListener.remove();
    },


    render: function() {

      if(this.state.user === undefined) { return <div></div>; }
      window.user = this.state.user;

     return (

        <div>
          <div>
            <title>Fatebook</title>
          </div>
            <UsersIndex />
          <div>
            <header className="header">
              <NavBar />
            </header>
            <main className="content group">
              <UserContentHeader />
              <UserRibbon />
              <UserSideBar  />
            <section className="content-main">
              <UserMap />
            </section>
            </main>
            <Footer />
          </div>
        </div>
          );
        }
      });
