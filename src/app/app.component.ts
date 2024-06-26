import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoComponent } from "./photos/photo/photo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PhotoComponent]
})
export class AppComponent {
  photos = [{
    url: 'http://assets.jpg',
    description: 'leao'
  },
  {
    url: 'http://assets.jpg',
    description: 'leao'
  }]
}
