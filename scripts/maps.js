import config from './map_style.js';

let initMap = () => {
    //var image = './icon.png';
    var rendelo = { lat: 47.529765, lng: 19.067288 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: rendelo,
        styles: config
    });
    var marker = new google.maps.Marker({
        position: rendelo,
        map: map,
        title: 'Kaméleon',
        //icon: image,
    });
    console.log('zoom: ', map.getZoom());
}
export default initMap;