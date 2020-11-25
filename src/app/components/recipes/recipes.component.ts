import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public featuredRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onEmittedRecipe(emittedRecipe: Recipe): void {
    this.featuredRecipe = emittedRecipe;
  }

}
