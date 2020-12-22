import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';
import { Ingredient } from '../../../model/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddButton(): void {
    const ingredient = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    this.shoppingListService.addIngredient(ingredient);
  }

  onDeleteButton(): void {
    this.shoppingListService.deleteIngredient();
  }

  onClearButton(): void {
    this.shoppingListService.clearIngredients();
  }
}
