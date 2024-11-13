import { ANSWER, UserActions } from "./actions";

type Answer = string;
interface UserAnswers {
  [question: string]: Answer;
}

export const intialState = {};
export const reducer = (
  state: UserAnswers = intialState,
  action: UserActions
) => {
  if (action.type == ANSWER) {
    return { ...state, [action.payload.question]: action.payload.answer };
  }
  return state;
};
