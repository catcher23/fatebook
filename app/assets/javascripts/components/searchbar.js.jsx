window.SearchBar = React.createClass({
  mixins: [ReactRouter.History],
  findHuman: function () {
    this.history.pushState(null, '/human/' + key, {});
  },
  getInitialState: function(){
    return { searchString: '' };
  },
  handleChange: function(e){
    this.setState({ searchString: e.target.value });
  },
  clearBar: function(e){
   this.setState({searchString: ''});
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
        if (filtered.indexOf(HumanStore.all()[i].fname.concat(' ', HumanStore.all()[i].lname)) !== -1) {
          filteredObjs.push(HumanStore.all()[i]);
        }
        }


    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange} placeholder="Find Human" />
        <ul className="tabs"><li onClick={this.clearBar}>
          {
            filteredObjs.map(function(human){
              return <HumanIndexItem key={human.id} human={human}  />;
            })
          }
        </li>
        </ul>
      </div>
    );
  }
});
