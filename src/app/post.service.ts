import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Person} from './Person';

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

  getPerson(slug: string): Observable<Person> {
    return this.http.get<Person>(this.baseUrl + `api/v1/person/${slug}/`);
  }

  constructor(private http: HttpClient) {
  }
}
