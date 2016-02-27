import {ActionInterface} from "../model/redux/action.interface";

export class ModalAction {
    static TOGGLE_VISIBILITY = 'MODAL_TOGGLE_VISIBILITY';
}

export function reduce(modal = null, action: ActionInterface) {
    switch (action.type) {
        case ModalAction.TOGGLE_VISIBILITY:
            return toggleVisibility(modal, action);
        default:
            return modal;
    }
}

function toggleVisibility(modal, action: ActionInterface) {
    return modal;
}
