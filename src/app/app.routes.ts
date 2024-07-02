import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './photos/photo/photo.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NgModel } from '@angular/forms';
import { NotFoundComponent } from './errors/not-found/not-found.component';

export const routes: Routes = [
  { path: 'user/:userName', component:PhotoComponent},
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent}
];
