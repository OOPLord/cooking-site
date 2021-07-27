import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                const id = +params['id'];
                this.recipe = this.recipeService.getRecipe(id);
            }
        );
    }

    onAddToShoppingList() {
        this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    }

    onEditRecipe() {
        this.router.navigate([ 'edit' ], { relativeTo: this.route });
    }
}