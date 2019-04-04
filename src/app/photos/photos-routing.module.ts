import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePhotosComponent } from './components/home-photos/home-photos.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

const routes: Routes = [
  // {path:'', component: HomePhotosComponent},
    // children: [
      // {path: 'photos', component: PhotosListComponent}
      // {path: ':userid', component: DetalleUsuarioComponent},
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
