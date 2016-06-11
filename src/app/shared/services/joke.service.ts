import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import { IJoke, IJokeResult } from '../interfaces/index';

@Injectable()
export class JokeService {

  constructor(private http: Http) {}

  public baseUrl = 'http://api.icndb.com/';

  public getJoke(): Observable<IJoke> {
    const url = this.baseUrl + 'jokes/random';

    return this.http
            .get(url)
            .map(result => result.json())
            .map((result: IJokeResult) => result.value);
  }

  public getCategories(): Observable<string[]> {
    const url = this.baseUrl + 'categories';
    return this.http
             .get(url)
             .map(result => result.json())
             .map((result: IJokeResult) => result.value);
  }

}
