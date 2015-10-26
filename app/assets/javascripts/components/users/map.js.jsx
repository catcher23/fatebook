(function(root){


  root.UserMap = React.createClass({

    componentDidMount: function(){
      console.log('map mounted');

      var styles = [
  {
    "stylers": [
      { "invert_lightness": true },
      { "hue": "#2bff00" },
      { "saturation": 100 },
      { "gamma": 0.78 },
      { "lightness": -17 }
    ]
  }
];

      var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.750516, lng: -122.440224},
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.map.mapTypes.set('map_style', styledMap);
      this.map.setMapTypeId('map_style');
      this.getDirections(this.map);
    },

    componentWillUnmount: function(){
      console.log("map UNmounted");
    },

    moveMarker: function (map, marker, latlng) {
        marker.setPosition(latlng);

    },

    autoRefresh: function(map, pathCoords, human) {
    var i, route, marker;
    route = new google.maps.Polyline({
        path: [],
        geodesic : true,
        strokeColor: 'green',
        strokeOpacity: 2.0,
        strokeWeight: 0,
        editable: false,
        map:map
    });
    var that = this;

      humanImg = {
        url: human.image_url,
        scaledSize: new google.maps.Size(38, 38)
      };
      var humanName = human.fname+' '+human.lname;
      var infowindow = new google.maps.InfoWindow({
        content: humanName
        });

        marker=new google.maps.Marker({
          map:map,
          icon:humanImg,
        });

        marker.addListener('mouseover', function() {
            infowindow.open(map, marker);
          });

          marker.addListener('mouseout', function() {
              infowindow.open(map, marker);
            });

      for (i = 0; i < pathCoords.length; i++) {
          setTimeout(function(coords) {
              route.getPath().push(coords);
              that.moveMarker(map, marker, coords);
          }, 1000 * i, pathCoords[i]);
      }


  },

  getDirections: function(map) {
    function getRand(min, max) {
      return Math.random() * (max - min) + min;
    }
    var that = this;
    user.trackees.map(function (human) {
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

      directionsService.route(request, function(result, status) {
          if (status == google.maps.DirectionsStatus.OK) {
              that.autoRefresh(map, result.routes[0].overview_path, human);
          }
      });
    });
  },
      render: function(){
        return ( <div className="half" ref="map">Map</div>);
      }
    });
  })(this);
