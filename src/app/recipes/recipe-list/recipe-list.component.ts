import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private resipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) {

    }
    
    ngOnInit(){
        this.recipes = this.resipeService.getRecipes();
    }

    onNewRecipe() {
        this.router.navigate([ 'new' ], { relativeTo: this.route });
    }
}