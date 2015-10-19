(function(root) {
  'use strict';

  root.UserShow = React.createClass({
    mixins: [ReactRouter.History],

    render: function() {
      var that = this;
      return (
        <div>
          <div>
            <title>Fatebook</title>
          </div>
            <HumansIndex history={this.history}/>
          <div>
            <header className="header">
              <NavBar />
            </header>
            <main className="content group">
              <UserContentHeader />
              <UserSideBar />
            <section className="content-main">
              <NoteForm />
            </section>
            </main>
            <Footer />
          </div>
        </div>
          );
        }
      });
}(this));
