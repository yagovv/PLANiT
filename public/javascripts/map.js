window.onload = () => {
    const ironhackMAD = { lat: 40.392491, lng: -3.697986 };
    // Map initialization
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ironhackMAD
    });
  
    const plans = window.plans;
    console.log(plans);
  
    // Add restaurant markers to map
    let markers = [];
    plans.forEach(function(place) {
      let title = place.name;
      let position = {
        lat: place.location.coordinates[0],
        lng: place.location.coordinates[1]
      };
      var pin = new google.maps.Marker({
        position: position,
        map: map,
        title: title
      });
      markers.push(pin);
    });
    //  var bounds = new google.maps.LatLngBounds();
    // bounds.extend(plans);
    // map.fitBounds(bounds);
  };
  