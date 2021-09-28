import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-map',
templateUrl: './map.component.html',
styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
constructor() {}


lat = 19.29095;
lng = -99.653015;
zoom = 9;

ngOnInit(): void {
this.getLocation()
}

getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
if (position) {
this.lat = position.coords.latitude,
this.lng = position.coords.longitude
}
},
(error: GeolocationPositionError) => console.log(error));
} else {
alert("Geolocation is not supported by this browser.");
}
}
}