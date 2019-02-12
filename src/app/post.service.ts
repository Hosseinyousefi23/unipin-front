import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = environment.baseUrl;

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + 'api/v1/post/', {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    });
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + `api/v1/post/${id}/`);
  }

  constructor(private http: HttpClient) {
  }
}
