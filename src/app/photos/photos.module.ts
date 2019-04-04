import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosService } from './services/photos.service';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {MatListModule} from '@angular/material/list';
import { ImageDirective } from './directives/image.directive';
import { HomePhotosComponent } from './components/home-photos/home-photos.component';

@NgModule({
  declarations: [
    PhotosListComponent,
    ImageDirective,
    HomePhotosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    ScrollingModule, // <-- Insertar el scrilling
    PhotosRoutingModule
  ],
  providers: [
    PhotosService
  ],
  exports: [PhotosListComponent]
})
export class PhotosModule { }
