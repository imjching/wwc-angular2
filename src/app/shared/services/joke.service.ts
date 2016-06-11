import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import { IJoke, IJokeResult } from '../interfaces/index';

@Injectable()
export class JokeService {

  constructor(private http: Http) {}

  public url = 'http://api.icndb.com/jokes/random';

  public getJoke(): Observable<IJoke> {
    return this.http
            .get(this.url)
            .map(result => result.json())
            .map((result: IJokeResult) => result.value);
  }

}
