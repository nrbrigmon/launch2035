import {Directive, ElementRef, Renderer, Host, Dependency, Input} from '@angular/core';

@Directive({
    selector: 'makeActive',
    inputs: ['makeActive'],
    host: {
        '(click)': 'onClick($event)',
    }
})

export default class MakeActiveDirective {
    @Input('makeActive') offClickHandler;

    constructor(public el: ElementRef, public renderer: Renderer){}

    ngOnInit() {
      let self=this;
      setTimeout(() => {document.addEventListener('click', self.offClickHandler);}, 0);
    }

    onClick($event) {
        // consol
    }
}
