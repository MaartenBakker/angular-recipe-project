import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output()
  public recipeEmitter = new EventEmitter<Recipe>();


  recipes: Array<Recipe> = [
    new Recipe(
      'Nasi',
      'very nice',
      'https://worstenbroodenwijn.nl/wp-content/uploads/2017/10/Nasi-met-courgette-en-buikspek.jpg'
    ),
    new Recipe(
      'Bami',
      'super nice',
      'https://worstenbroodenwijn.nl/wp-content/uploads/2017/10/Nasi-met-courgette-en-buikspek.jpg'
    ),
    new Recipe(
      'broccoli',
      'ook lekker',
      'https://worstenbroodenwijn.nl/wp-content/uploads/2017/10/Nasi-met-courgette-en-buikspek.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick(emittedRecipe: Recipe): void {
    this.recipeEmitter.emit(emittedRecipe);
  }
}
