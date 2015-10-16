(function(root) {
  'use strict';

  root.Testing = React.createClass({
    mixins: [ReactRouter.History],

    render: function() {
      var that = this;
      return (
        <html>
          <head>
            <title>Fatebook</title>
          </head>
          <body>
            <header className="header">
              <NavBar />
            </header>
            <main className="content group">
              <ContentHeader />
              <SideBar />
            <section className="content-main">
              <NoteForm />
            </section>
            </main>
            <Footer />
          </body>
          </html>
          );
        }
      });
}(this));
