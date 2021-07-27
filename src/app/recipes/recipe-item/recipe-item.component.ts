import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
    @Input() recipe;
    @Input() recipeId;

    constructor(private recipeService: RecipeService) { }
}