var SearchBar = React.createClass({
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
    var libraries = [
        { name: 'Thomas Anderson'},
        { name: 'Morpheus'},
        { name: 'Trinity'},
        { name: 'Arjen Robben'},
        { name: 'Andres Iniesta'},
        { name: 'Sergio Aguero'},
        { name: 'Alexis Sanchez'},
        { name: 'Arturo Vidal'},
        { name: 'Lionel Messi'},
        { name: 'Carlos Tevez'},
        { name: 'Cristiano Ronaldo'},
        { name: 'Anthony Martial'},
        { name: 'Wayne Rooney'},
        { name: 'Robert Lewandowski'},

    ];
        searchString = this.state.searchString.trim().toLowerCase();

      // We are searching. Filter the results.
      filtered = libraries.filter(function(l){
        if(searchString.length > 0){
          return l.name.toLowerCase().match( searchString );
        }
      });

    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange} placeholder="Find Human" />
        <ul>

          {
            filtered.map(function(l){
              return <li><a href={l.name}>{l.name}</a></li>;
            })
          }
        </ul>
      </div>
    );
  }
});


// Render the SearchExample component on the page
