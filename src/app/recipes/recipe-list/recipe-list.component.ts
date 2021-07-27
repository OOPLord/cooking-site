import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[];
    subscription: Subscription;

    constructor(private resipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) {

    }
    
    ngOnInit(){
        this.recipes = this.resipeService.getRecipes();

        this.subscription = this.resipeService.recipesChangesEvent.subscribe(
            (recipies: Recipe[]) => {
                this.recipes = recipies;
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onNewRecipe() {
        this.router.navigate([ 'new' ], { relativeTo: this.route });
    }
}