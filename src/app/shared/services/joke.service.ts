import { Injectable } from '@angular/core';
import { IJoke } from '../interfaces/index'

@Injectable()
export class JokeService {

  constructor() {}

  public getJoke(): IJoke {
    // stub
    return {
      id: '11',
      joke: 'hello world'
    };
  }

}
