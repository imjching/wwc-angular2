import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'hello-world-app',
  // template: `HTML here` (backtick)
  // or templateUrl
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent}
])
export class HelloWorldAppComponent {
  title = 'hello-world works!';

  customer: ICustomer = {
    //you need to have all fields
    name: 'Jane',
    age: 10,
    isSingle: false
  }

  name : string = '';
  sayHello(name : string) {
    window.alert('Hello ' + name);
  }
}

export interface ICustomer {
  name: string;
  age: number;
  isSingle: boolean;
  // isSingle?: boolean; // this means optional
}
