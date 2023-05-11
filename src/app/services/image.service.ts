import { Injectable } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  list,
  ref,
  uploadBytes,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private storage: Storage) {}

  url: string = '';

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/` + name);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getImages() {
    const imagesRef = ref(this.storage, 'image/');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
