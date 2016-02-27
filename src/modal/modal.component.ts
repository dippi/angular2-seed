import {Component, View, Input} from 'angular2/core';

import template = require('./modal.component.html');
import style = require('./modal.component.scss');

class ModalSize {
    static LG = 'LG';
    static MD = 'MD';
    static SM = 'SM';
}

@Component({
    selector: 'modal',
})
@View({
    template: template.default,
    styles: [<String> style.default],
})
export class ModalComponent {
    @Input() size: ModalSize = ModalSize.MD;
    @Input() isBlocking: boolean = false;
    @Input() quitKeys: number[] = [27];
    @Input() parent: HTMLElement = document.body;
}
