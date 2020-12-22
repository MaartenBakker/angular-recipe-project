import { Ingredient } from './ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath = 'recipes';
  public ingredients: Array<Ingredient>;

  constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
