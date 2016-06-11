import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { CategoriesComponent } from './+categories';
import { CustomizeComponent } from './+customize';

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
  {path: '/dashboard', component: DashboardComponent},
  {path: '/categories', component: CategoriesComponent},
  {path: '/customize', component: CustomizeComponent}
])
export class HelloWorldAppComponent {
  title = 'Angular 2: Getting Started with jokes!';
}
