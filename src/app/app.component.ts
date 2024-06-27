import { PhotoService } from './photos/photo/photo.service';
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

  constructor(photoService: PhotoService) {

    photoService
      .listFromUser('flavio')
      .subscribe(photos => {
        console.log(photos[0].userId);
        this.photos = photos;
      });

  }
}
