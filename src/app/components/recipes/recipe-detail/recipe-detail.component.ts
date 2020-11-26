import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  public recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
