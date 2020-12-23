import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../model/recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  public recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
  }

  onAddToShoppingList(): void {
    this.recipe.ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    });
  }

}
