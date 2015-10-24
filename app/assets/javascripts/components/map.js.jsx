(function(root){


  function _getCoordsObj(latLng) {
    return {
      lat: latLng.lat(),
      lng: latLng.lng()
    };
  }

  root.Map = React.createClass({

    componentDidMount: function(){
      console.log('map mounted');
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 51.5087531, lng: -0.1281153},
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };
      this.map = new google.maps.Map(map, mapOptions);
       this.getDirections(this.map);
    },

    componentWillUnmount: function(){
      console.log("map UNmounted");
    },

    moveMarker: function (map, marker, latlng) {
        marker.setPosition(latlng);
        map.panTo(latlng);
    },

    autoRefresh: function(map, pathCoords) {
    var i, route, marker;

    route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: 'green',
        strokeOpacity: 2.0,
        strokeWeight: 5,
        editable: false,
        map:map
    });

var that = this;
    marker=new google.maps.Marker({map:map, icon:"http://maps.google.com/mapfiles/ms/micons/green.png"});

  for (i = 0; i < pathCoords.length; i++) {
      setTimeout(function(coords) {
          route.getPath().push(coords);
          that.moveMarker(map, marker, coords);
      }, 3000 * i, pathCoords[i]);
  }
},

getDirections: function(map) {
  function getRand(min, max) {
    return Math.random() * (max - min) + min;
  }
  var olat = getRand(37.7, 37.782);
  var olng = getRand(-122.5, -122.38);
  var dlat = getRand(37.7, 37.782);
  var dlng = getRand(-122.5, -122.38);
    var directionsService = new google.maps.DirectionsService();

    var request = {
        origin: new google.maps.LatLng(olat, olng),
        destination: new google.maps.LatLng(dlat, dlng),

        travelMode: google.maps.TravelMode.DRIVING
    };
    var that = this;
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            that.autoRefresh(map, result.routes[0].overview_path);
        }
    });
},

    render: function(){
      return ( <div className="half" ref="map">Map</div>);
    }
  });
})(this);
