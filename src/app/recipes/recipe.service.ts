import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChangesEvent = new Subject<Recipe[]>();

    private recipies: Recipe[] = [
        new Recipe(
            'Shakshuka1',
            'This is a test',
            'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
            [
                new Ingredient('Eggs', 5),
                new Ingredient('Tomatoes', 2),
                new Ingredient('Onion', 1)
            ]),
        new Recipe(
            'Shakshuka2',
            'Shakshuka is a North African and Middle Eastern meal of poached eggs in a simmering tomato sauce',
            'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
            [
                new Ingredient('Eggs', 5),
                new Ingredient('Tomatoes', 2),
                new Ingredient('Onion', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipies.slice();
    }

    getRecipe(id: number): Recipe {
        return this.recipies[id];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipies.push(recipe);
        this.recipesChangesEvent.next(this.getRecipes());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipies[index] = newRecipe;
        this.recipesChangesEvent.next(this.getRecipes());
    }

    deleteRecipe(index: number) {
        this.recipies.splice(index, 1);
        this.recipesChangesEvent.next(this.getRecipes());
    }
}