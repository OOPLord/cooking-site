import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    addedNewIngredient = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    addNewIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.addedNewIngredient.next(this.getIngredients());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.addedNewIngredient.next(this.getIngredients());
    }
}