var React = require('react');
var HumanStore = require('../stores/human');
module.exports = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function(){

    return { searchString: '', inputValue: '' };
  },
  handleChange: function(e){

     this.setState({
      searchString: e.target.value,


    });
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
      filtered = libraries.filter(function(name){
        if(searchString.length > 0){
          return name.toLowerCase().match( searchString );
        }
      });

      var filteredObjs = [];
      var that = this;
      for (i = 0; i < HumanStore.all().length; i++) {
        if (filtered.indexOf(HumanStore.all()[i].fname.concat(' ', HumanStore.all()[i].lname)) !== -1) {
          filteredObjs.push(HumanStore.all()[i]);
        }
        if (filteredObjs.length == 8) {

          break;
        }
      }
      var counter = 0;
    return (
      <div id='searchbar'>
        <input
          className='searchbar'
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange} placeholder=" Find Human" />
          <button className="btn btn-default searchButton" type="submit">Search</button>
          <ul className="searchresults"><li onClick={this.clearBar}>
          {
            filteredObjs.map(function(human){
              counter += 1;
              var status = '';
              if (counter == 1) {status = 'active';}
              var humanUrl = "/#/humans/" + human.id;

            return <li className= {'result '  + status}  key={counter}><a href={humanUrl}>{human.fname+' '+human.lname}</a></li>;

            })
          }
        </li>
        </ul>
      </div>
    );
  }
});
