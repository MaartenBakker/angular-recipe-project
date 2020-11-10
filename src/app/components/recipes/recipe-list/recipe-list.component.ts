import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe(
      'testNasi',
      'very nice',
      'https://worstenbroodenwijn.nl/wp-content/uploads/2017/10/Nasi-met-courgette-en-buikspek.jpg'
    ),
    new Recipe(
      'testNasi',
      'very nice',
      'https://worstenbroodenwijn.nl/wp-content/uploads/2017/10/Nasi-met-courgette-en-buikspek.jpg'
    ),
    new Recipe(
      'testNasi',
      'very nice',
      'https://worstenbroodenwijn.nl/wp-content/uploads/2017/10/Nasi-met-courgette-en-buikspek.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
