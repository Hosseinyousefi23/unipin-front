import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('api/v1/post/');
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`api/v1/post/${id}/`);
  }

  constructor(private http: HttpClient) {
  }
}
