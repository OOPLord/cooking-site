import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpened = false;

    constructor(private elRef: ElementRef) {

    }

    // @HostListener('click') toggleOpen() {
    //     this.isOpened = !this.isOpened;
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpened = this.elRef.nativeElement.contains(event.target) ? !this.isOpened : false;
    }
}