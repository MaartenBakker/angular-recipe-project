import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  public featuredRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (selectedRecipe: Recipe) => {
        this.featuredRecipe = selectedRecipe;
      }
    );
  }


}
