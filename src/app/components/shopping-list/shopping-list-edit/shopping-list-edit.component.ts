import {Component, OnInit, ViewChild, EventEmitter, ElementRef, Output} from '@angular/core';
import {Ingredient} from '../../../model/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountRef: ElementRef;

  @Output()
  public addNewIngredient = new EventEmitter<Ingredient>();

  @Output()
  public clearIngredients = new EventEmitter<null>();

  @Output()
  public deleteFirstIngredient = new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddButton(): void {
    const ingredient = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    this.addNewIngredient.emit(ingredient);
  }

  onDeleteButton(): void {
    this.deleteFirstIngredient.emit();
  }

  onClearButton(): void {
    this.clearIngredients.emit();
  }
}
