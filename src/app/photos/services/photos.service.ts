import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private _photos: any[] = [];
  photosList: Subject<Observable<any[]>> = new Subject<Observable<any[]>>();

  get photos() {
    return this._photos;
  }

  constructor(
    private httpSrv: HttpClient
  ) { 
  }

  obtenerPhotos = () => {
    return this.httpSrv.get<any[]>('https://jsonplaceholder.typicode.com/photos')
  }

}
