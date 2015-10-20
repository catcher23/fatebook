(function(root) {
  'use strict';

  root.UserShow= React.createClass({


    render: function() {
    
     return (

        <div>
          <div>
            <title>Fatebook</title>
          </div>
            <UsersIndex history={this.history}/>
          <div>
            <header className="header">
              <NavBar />
            </header>
            <main className="content group">
              <UserContentHeader />
              <UserSideBar />
            <section className="content-main">
            </section>
            </main>
            <Footer />
          </div>
        </div>
          );
        }
      });
}(this));
