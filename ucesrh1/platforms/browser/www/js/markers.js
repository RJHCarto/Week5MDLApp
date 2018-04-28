  // load the map
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    // load the tiles
    L.tileLayer('https://api.mapbox.com/styles/v1/rjhargreaves/cjcv3d22i04bp2rpza7tjx1c4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmpoYXJncmVhdmVzIiwiYSI6ImNpa3JmbDJiazAwMDF3Y20xMHoyaXowdDAifQ.78vWSemMDwn42TwMuxfODw', {maxZoom: 18,attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' 
      + 
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    
    }).addTo(mymap);
    
    var testMarkerRed = L.AwesomeMarkers.icon({
      icon: 'play',
      markerColor: 'red'
    });
    var testMarkerPink = L.AwesomeMarkers.icon({
      icon: 'play',
      markerColor: 'blue'
    });