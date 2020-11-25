import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../../../model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input()
  public recipe: Recipe;

  @Output()
  public recipeEmitter = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.recipeEmitter.emit(this.recipe);
  }
}
