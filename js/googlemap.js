/** Using Google Map API to show a map and marker **/

/** Initialize the map **/
function gmInitMap() {
    var theoldrock = {lat: 52.9297058, lng: -1.2753052};
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 16,
        center: theoldrock
    });
    var marker = new google.maps.Marker({
        position: theoldrock,
        map: map
    });
}