import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoComponent } from "./photos/photo/photo.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PhotoComponent]
})
export class AppComponent {
  photos: Object[] = [];

  constructor(http: HttpClient) {

    http
    .get<Object[]>('https://rickandmortyapi.com/api/location/3')
    .subscribe(
      photos => this.photos = photos,
      err => console.log(err.message)
    );

  }
}
