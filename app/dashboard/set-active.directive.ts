import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[makeActive]',
    host: {
        '(click)': 'onClick($event)',
    }
})

export class MakeActiveDirective {
    constructor(public el: ElementRef, public renderer: Renderer){
    }

    onClick($event){

      // this.renderer.setElementClass(this.el.nativeElement, 'active', true);
    }

}
