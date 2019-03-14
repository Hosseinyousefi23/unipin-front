import {Injectable} from '@angular/core';
import {Tag} from './Tag';
import {Post} from './post';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  baseUrl = environment.baseUrl;

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.baseUrl + `api/v1/tag/`);
  }

  constructor(private http: HttpClient) {
  }
}
