import { PhotoService } from './../photo/photo.service';
import { Photo } from './../photo/photo';
import { Component } from '@angular/core';
import { constants } from 'buffer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css'
})
export class PhotoListComponent {

  Photos: any[] = [];

  constructor(
    private PhotoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.PhotoService
     .listFromUser(userName)
     .subscribe(Photo => this.Photos = photos);
  }
}
