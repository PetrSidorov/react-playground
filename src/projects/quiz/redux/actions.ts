export const ANSWER = "ANSWER";
export const answer = (question: string, answer: string) => ({
  type: ANSWER,
  payload: { question, answer },
});
