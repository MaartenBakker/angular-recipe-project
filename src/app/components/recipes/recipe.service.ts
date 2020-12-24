import { Injectable } from '@angular/core';
import { Recipe } from '../../model/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../model/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe(
      'Nasi',
      'very nice',
      'https://worstenbroodenwijn.nl/wp-content/uploads/2017/10/Nasi-met-courgette-en-buikspek.jpg',
      [new Ingredient('Rijst', 1), new Ingredient('Kip', 2)]
    ),
    new Recipe(
      'Bami',
      'super nice',
      'https://worstenbroodenwijn.nl/wp-content/uploads/2017/10/Nasi-met-courgette-en-buikspek.jpg',
      [new Ingredient('Bami', 1), new Ingredient('Groente', 2)]
    ),
    new Recipe(
      'Broccoli',
      'ook lekker',
      'https://worstenbroodenwijn.nl/wp-content/uploads/2017/10/Nasi-met-courgette-en-buikspek.jpg',
      [new Ingredient('Broccoli', 1), new Ingredient('Zout', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Array<Recipe> {
    return this.recipes.slice(); // slice() used to return copy instead of direct reference
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
