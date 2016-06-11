import { Component, OnInit } from '@angular/core';
import { IJoke } from '../shared/interfaces/index';
import { JokeService } from '../shared/services/index';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public joke: IJoke;

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    // using API to call joke
    // this.joke = this.jokeService.getJoke();
    this.jokeService.getJoke().subscribe(result => { this.joke = result });
  }

}
