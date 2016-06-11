import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/services/index';
import { IJoke } from '../shared/interfaces/index';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: string[];
  public jokes: IJoke[];

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.jokeService.getCategories().subscribe(result => { this.categories = result });
  }

  retrieveJokes(category: string, event) {
    event.preventDefault();
    this.jokeService.getJokes(category, 5).subscribe(result => { this.jokes = result });
  }

}
