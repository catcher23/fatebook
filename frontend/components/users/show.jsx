var React = require('react');
var NavBar = require('../navbar');
var UserContentHeader = require('./content_header');
var UserRibbon = require('./user_ribbon');
var UserSideBar = require('./sidebar');
var UserMap = require('./map');
var UserNotes = require('./notes');
var Footer = require('../footer');
var UserStore = require('../../stores/user');
var ApiUtil = require('../../util/api_util');

module.exports = React.createClass({

    mixins: [ReactRouter.History],

    componentDidMount: function () {
      this.userListener = UserStore.addListener(this._onChange);
      ApiUtil.fetchAllHumans();
      ApiUtil.fetchAllUsers();
      ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
    },
    getStateFromStore: function () {
      return{
        users: UserStore.all(),
        user: UserStore.find(parseInt(this.props.params.userId)),
        component: <UserMap />
      };
    },

    _onChange: function () {
       this.setState(this.getStateFromStore());
    },

    getInitialState: function () {
       return this.getStateFromStore();
     },

    showMap: function () {
      this.setState({ component: <UserMap />});
    },
    showNotes: function () {
      this.setState({ component: <UserNotes user={this.state.user}/>});
    },

    componentWillReceiveProps: function (newProps) {
      ApiUtil.fetchSingleUser(parseInt(newProps.params.userId));
    },

    componentWillUnmount: function () {
      this.userListener.remove();
    },

    render: function() {
      var component = this.state.component;
      if(this.state.user === undefined) { return <div></div>; }
     window.user = this.state.user;
     return (
        <div>
          <div>
            <title>Fatebook</title>
            <header className="header">
              <NavBar />
            </header>
            <main className="content group">
              <UserContentHeader user={user}/>
              <UserRibbon showMap={this.showMap} showNotes={this.showNotes}/>
              <UserSideBar user={user} />
            <section className="content-main">
              {component}
            </section>
            </main>
            <Footer />
          </div>
        </div>
          );
        }
      });
