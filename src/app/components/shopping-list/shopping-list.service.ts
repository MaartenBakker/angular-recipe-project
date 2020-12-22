import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Ingredient } from '../../model/ingredient.model';

@Injectable({
    providedIn: 'root',
  })
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<void>();

  private ingredients: Array<Ingredient> = [
    new Ingredient('rijst', 1),
    new Ingredient('kip', 2),
  ];

  constructor() { }

  getIngredients(): Array<Ingredient> {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit();
  }

  clearIngredients(): void {
    this.ingredients = [];
    this.ingredientsChanged.emit();
  }

  deleteIngredient(): void {
    this.ingredients.shift();
    this.ingredientsChanged.emit();
  }
}
