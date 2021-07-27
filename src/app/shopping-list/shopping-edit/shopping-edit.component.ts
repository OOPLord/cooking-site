import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: [ './shopping-edit.component.css' ]
})
export class ShoppingEditComponent {
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;
    @ViewChild('form') editForm: NgForm;

    constructor(private shoppingListService: ShoppingListService) {

    }

    addRecipe() {
        const name = this.nameInput.nativeElement.value;
        const amount = this.amountInput.nativeElement.value;
        const ingredient = new Ingredient(name, amount);

        this.shoppingListService.addNewIngredient(ingredient);
    }

    onSubmit() {
        console.log(this.editForm);
    }
}