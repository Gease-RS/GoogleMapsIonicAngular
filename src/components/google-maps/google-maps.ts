import { Component, ViewChild } from '@angular/core';

/**
 * Generated class for the GoogleMapsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {

  @ViewChild("map") mapElement;
  map: any;
  constructor() {

  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){

    let coords = new google.maps.LatLng(-29.973752,-51.194884);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement,
      mapOptions)

      this.newFunction(coords);

  }


    private newFunction(coords: google.maps.LatLng) {
        let marker: google.maps.Marker = new google.maps.Marker({
            map: this.map,
            position: coords
        });
    }
}
