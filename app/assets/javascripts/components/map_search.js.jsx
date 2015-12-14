(function(root){
  function _getAllHumans() {
    return HumanStore.all();
  }

  function _getFilterParams() {
    return FilterParamsStore.params();
  }
  root.Search = React.createClass({

    _humansChanged: function(){
      this.setState({humans: _getAllHumans()});
    },
    _filtersChanged: function () {
      var newParams = _getFilterParams();
      this.setState({ filterParams: newParams });
      ApiUtil.fetchAllHumans();
    },
    getInitialState: function(){
      return {
        humans: _getAllHumans(),
        filterParams: _getFilterParams(),
        clickedLoc: null,
      };
    },
    componentDidMount: function(){
      HumanStore.addChangeListener(this._humansChanged);
      FilterParamsStore.addChangeListener(this._filtersChanged);
      ApiUtil.fetchAllHumans();
    },
    componentWillUnmount: function(){
      HumanStore.removeChangeListener(this._humansChanged);
    },
    handleMapClick: function(coords){
      this.props.history.pushState(null, "humans/new", coords);
    },
    handleMarkerClick: function (bench) {
      this.props.history.pushState(null, "humans/" + bench.id);
    },
    render: function(){
      return(
      <div>
        <h5>Click Map to Add Human!</h5>
        <Map
          onMapClick={this.handleMapClick}
          onMarkerClick={this.handleMarkerClick}
          humans={this.state.humans}/>
        <div className="half">
          <Filters humans={this.state.humans} filterParams={this.state.filterParams}/>
          <Index humans={this.state.humans} history={this.history} />
        </div>
      </div>
      );
    }
  });
})(this);
