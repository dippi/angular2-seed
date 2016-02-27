import {bootstrap}    from 'angular2/platform/browser'
import {Type} from 'angular2/src/facade/lang';
import {provide} from 'angular2/core';
import {createStore} from 'redux';
import appReducer from 'app/app.reducer';

import {AppComponent} from 'app/app.component';

const appStore = createStore(appReducer);

bootstrap(<Type> AppComponent, [provide('AppStore', {useValue: appStore})])
    .catch(err => console.error(err));

import {Record} from 'immutable';

class TestMixin {
    id: number = 0;
    name: string = 'unnamed';

    sayMyName = function () {
        return this.name;
    }
}

class Test extends Record(new TestMixin()) implements TestMixin {
    constructor(props?) {
        super(props);
    }

    id: number;
    name: string;
    sayMyName: () => string;
}

let test = new Test({id: 0, name: 'test'});
let test1 = <Test> test.set('id', 1);

let sayName = (test: Test) => test.sayMyName();

console.log(test.id, test1.id, test == test1, sayName(test), sayName(test1));
