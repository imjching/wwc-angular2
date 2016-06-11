import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/services/index';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: string[];

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.jokeService.getCategories().subscribe(result => { this.categories = result });
  }

}
