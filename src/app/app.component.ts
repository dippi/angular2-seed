import {Component, View} from 'angular2/core';
import {ModalComponent} from 'modal/modal.component';

import template = require('./app.component.html');

@Component({
    selector: 'app',
})
@View({
    template: template.default,
    directives: <Array> [ModalComponent],
})
export class AppComponent {
}
