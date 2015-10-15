window.SearchBar = React.createClass({
  mixins: [ReactRouter.History],
  findHuman: function () {
    this.history.pushState(null, '/human/' + key, {});
  },
  getInitialState: function(){
    return { searchString: '' };
  },
  handleChange: function(e){
    // If you comment out this line, the text box will not change its value.
    // This is because in React, an input cannot change independently of the value
    // that was assigned to it. In our case this is this.state.searchString.

    this.setState({ searchString: e.target.value });
  },
  render: function() {

    var libraries = [];
    for (var i = 0; i < HumanStore.all().length; i++) {
      libraries.push(HumanStore.all()[i].fname.concat(' ', HumanStore.all()[i].lname));
    }

        searchString = this.state.searchString.trim().toLowerCase();

      // We are searching. Filter the results.
      filtered = libraries.filter(function(name){
        if(searchString.length > 0){
          return name.toLowerCase().match( searchString );
        }
      });

      var filteredObjs = [];
      for (i = 0; i < HumanStore.all().length; i++) {
        if (filtered.indexOf(HumanStore.all()[i].fname.concat(' ', HumanStore.all()[i].lname)) != -1) {
          filteredObjs.push(HumanStore.all()[i]);
        }
        }


    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange} placeholder="Find Human" />
        <ul>

          {
            filteredObjs.map(function(human){
              return <HumanIndexItem key={human.id} human={human} />;
            })
          }
        </ul>
      </div>
    );
  }
});


// Render the SearchExample component on the page
