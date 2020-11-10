import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [
    new Ingredient('rijst', 1),
    new Ingredient('kip', 2),
  ];

  constructor() {}

  ngOnInit(): void {}
}
