import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';

declare var google: any;

interface Marker {
  lat?: number;
  lng?: number;
}

interface Location {
  lat: number;
  lng: number;
  marker?: Marker;
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
    geocoder:any;
    public location:Location = {
        lat: 51.678418,
        lng: 7.809007,
        marker: {
        },
    };

    @ViewChild(AgmMap, {static: false}) map: AgmMap;

    ngOnInit(): void {
    }

    findLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    this.location.lat = position.coords.latitude,
                    this.location.lng = position.coords.longitude,
                    this.location.marker.lat = position.coords.latitude,
                    this.location.marker.lng = position.coords.longitude
                }
                this.map.triggerResize()
            },
            (error) => console.log(error));
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    updateOnMap() {
        this.findLocation();
      }
}

