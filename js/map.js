function initMap() {
var centerLatLng = new google.maps.LatLng(56.107363, 38.139709);
var mapOptions = {
      center: centerLatLng,
      zoom: 16
};

var map = new google.maps.Map(document.querySelector(".contacts__map"), mapOptions);
var addressLatLng = new google.maps.LatLng(56.107363, 38.139709);

var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
var marker = new google.maps.Marker({
  position: addressLatLng,
  map: map,
  title: "Московская область, г. Красноармейск, ул. Свердлова, д. 33",
  icon: "img/map-pin.png"
});
}
