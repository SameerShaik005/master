import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private galleryUrl = 'http://localhost:5000';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getImages() {
    return this.http.get<any[]>(`${this.galleryUrl}/images`, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken() || '')
    });
  }

  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post(`${this.galleryUrl}/upload`, formData, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken() || '')
    });
  }
}
