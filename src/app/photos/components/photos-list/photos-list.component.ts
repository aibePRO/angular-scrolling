import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos:any[];
  photos$:Observable<any[]>;
  suscripcion: Subscription;

  constructor(private photosSrv: PhotosService) { }

  ngOnInit() {
    //this.usuarios$ = this.userSrv.obtenerusuarios();
    // Push
    this.suscripcion = this.photosSrv.photosList.subscribe(data => {
      this.photos$ = data;
    });
    this.photosSrv.obtenerPhotos();
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

}
