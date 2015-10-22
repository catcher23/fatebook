(function(root){
  function _getCoordsObj(latLng) {
    return {
      lat: latLng.lat(),
      lng: latLng.lng()
    };
  }

  var CENTER = {lat: 37.7758, lng: -122.435};

  root.Map = React.createClass({
    componentDidMount: function(){
      console.log('map mounted');
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: this.centerHumanCoords(),
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.registerListeners();
      this.markers = [];

    },
    centerHumanCoords: function () {

      if (user.trackees[0] && user.trackees[0].lng) {
        var human = user.trackees[0];
        return { lat: human.lat, lng: human.lng };
      } else {
        return CENTER;
      }
    },
    componentDidUpdate: function (oldProps) {
     this._onChange();
    },
    _onChange: function(){
      var humans = user.trackees;
      var toAdd = [];
      var toRemove = this.markers.slice(0);
      humans.forEach(function(human, idx){
      idx = -1;
        //check if human is already on map as a marker
        for(var i = 0; i < toRemove.length; i++){
          if(toRemove[i].humanId == human.id){
            idx = i;
            break;
          }
        }
        if(idx === -1){
          //if it's not already on the map, we need to add a marker
          toAdd.push(human);
        } else {
          //if it IS already on the map AND in the store, we don't need
          //to remove it
          toRemove.splice(idx, 1);
        }
      });

    var that = this;
setInterval(something, 1300);
  function something() {
    var i = 0;

      var interval = setInterval(function () {
        that.createMarkerFromHuman(toAdd[i]);
        console.log('create');
        i++;
          if (i >= toAdd.length) clearInterval(interval);
      }, 500);

      var j = 0;
      var linterval = setInterval(function () {
        that.removeMarker(toAdd[j]);
        console.log('delete');
        j++;

            if (j >= toAdd.length) clearInterval(linterval);
          }, 1000);
  }








      /* toRemove.forEach(this.removeMarker); */

      if (this.props.singleHuman) {
        this.map.setOptions({draggable: false});
        this.map.setCenter(this.centerHumanCoords());
      }
    },
    componentWillUnmount: function(){
      console.log("map UNmounted");
    },
    registerListeners: function(){
      var that = this;
      google.maps.event.addListener(this.map, 'idle', function() {
        var bounds = that.map.getBounds();
        var northEast = _getCoordsObj(bounds.getNorthEast());
        var southWest = _getCoordsObj(bounds.getSouthWest());
        //actually issue the request
        var bounds = {
          northEast: northEast,
          southWest: southWest
        };
        FilterActions.updateBounds(bounds);
      });
      google.maps.event.addListener(this.map, 'click', function(event) {
        var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
        that.props.onMapClick(coords);
      });
    },
    createMarkerFromHuman: function (human) {

      var that = this;
      var pos = new google.maps.LatLng(human.lat, human.lng);
      var marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        humanId: human.id
      });
      marker.addListener('click', function () {
        that.props.onMarkerClick(human)
      });
      this.markers.push(marker);
    },
    removeMarker: function(marker){

      for(var i = 0; i < this.markers.length; i++){

        if (this.markers[i].humanId === marker.id){

          this.markers[i].setMap(null);
          this.markers.splice(i, 1);
          break;
        }
      }
    },
    render: function(){
      return ( <div className="half" ref="map">Map</div>);
    }
  });
})(this);
