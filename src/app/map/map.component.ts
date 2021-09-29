import { Component, ViewChild, OnInit } from '@angular/core';
import { AgmMap } from '@agm/core';
import { Location } from '../shared/location'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
    
    //Initializes a location for the initial map without a marker.
    public location:Location = {
        lat: 35.667320,
        lng: 138.705506,
        marker: {
        },
    };

    //Decorates the map with the viewChild decorator
    @ViewChild(AgmMap, {static: false}) map: AgmMap;

    ngOnInit(): void {
    }
    
    /*
    * Get your current position and asigns it to the map marker and location.
    * It then refreshes the map with the changes.
    * If the geolocation is not enabled in the browser it pops an alert.
    */
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
}

