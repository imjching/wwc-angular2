import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { HelloWorldAppComponent, environment } from './app/';
import { JokeService } from './app/shared/services/index';
import 'rxjs/Rx';

if (environment.production) {
  enableProdMode();
}

bootstrap(HelloWorldAppComponent, [HTTP_PROVIDERS, JokeService]);

