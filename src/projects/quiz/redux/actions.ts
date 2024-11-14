export type UserActions = AnswerAction;
export interface AnswerAction {
  type: typeof ANSWER;
  payload: {
    question: string;
    answer: string;
  };
}

export const ANSWER = "ANSWER" as const;
export const answerQuestion = (question: string, answer: string) => ({
  type: ANSWER,
  payload: { question, answer },
});
