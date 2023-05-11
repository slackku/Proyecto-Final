import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(/*private storage: Storage*/) {}

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    // const imgRef = ref(this.storage, '/imagen' + name);
  }
}
