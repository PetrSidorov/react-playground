type QuestionT = {
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type QuestionsDataT = {
  response_code: number;
  results: QuestionT[];
};
