    var map;
var myLatLng = {lat: 47.493194, lng: 19.127275};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 18
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title:'布達佩斯展覽中心',
      animation:google.maps.Animation.BOUNCE
  });

  marker.setMap(map);
}