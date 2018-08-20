import { TodoState } from './Todo';
import { ButtonState } from './Button';

export interface RootState {
  todo: TodoState;
  button: ButtonState;
}
