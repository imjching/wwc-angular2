import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IJoke } from '../interfaces/index';

@Injectable()
export class JokeService {

  constructor() {}

  public url = 'http://api.icndb.com/jokes/random';

  public getJoke(): IJoke {
    // stub
    return {
      id: 11,
      joke: 'hello world'
    };
  }

}
