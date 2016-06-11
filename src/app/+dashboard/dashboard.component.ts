import { Component, OnInit } from '@angular/core';
import { IJoke } from '../shared/interfaces/index';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public joke: IJoke;

  constructor() {}

  ngOnInit() {
    // using API to call joke
    this.joke = {
      id: '1',
      joke: 'Testing!'
    }
  }

}
