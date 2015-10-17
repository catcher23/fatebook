(function(root) {
  'use strict';

  root.HumanLayout = React.createClass({
    mixins: [ReactRouter.History],

    render: function() {
      var that = this;
      return (
        <div>
          <div>
            <title>Fatebook</title>
          </div>
          <div>
            <header className="header">
              <NavBar />
            </header>
            <main className="content group">
              <HumanContentHeader />
              <HumanSideBar />
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
