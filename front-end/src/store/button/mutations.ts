import {ButtonState} from "../../types/Button";

export function setButton (state: ButtonState) {
    state.activate = true;
}

export function unsetButton (state: ButtonState) {
    state.activate = false;
}

export default {
  setButton,
  unsetButton,
};

