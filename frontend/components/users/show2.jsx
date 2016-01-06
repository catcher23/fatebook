var React = require('react');

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

      UserStore.addUserDetailChangeListener(this._onChange);
      ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));


    },

    componentWillUnmount: function () {
      UserStore.removeUserDetailChangeListener(this._onChange);
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
              <UserNotes/>
            </section>
            </main>
            <Footer />
          </div>
        </div>
          );
        }
      });
