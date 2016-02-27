import {Record} from 'immutable';

class ModalStateMixin {
    visible: boolean = false;
}

export class ModalState extends Record(new ModalStateMixin()) implements ModalStateMixin {
    constructor(props?) {
        super(props);
    }

    visible: boolean;
}
