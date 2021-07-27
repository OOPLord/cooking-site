import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    addedNewIngredient = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

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

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.addedNewIngredient.next(this.getIngredients());
    }

    updateIngredient(index: number, newInredient: Ingredient) {
        this.ingredients[index] = newInredient;

        this.addedNewIngredient.next(this.getIngredients());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.addedNewIngredient.next(this.getIngredients());
    }
}