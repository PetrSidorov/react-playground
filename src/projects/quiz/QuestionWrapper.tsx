import { useMemo, useState } from "react";
import { toShuffled } from "./utils";

export default function QuestionWrapper({
  handleQuestionSwitch,
  questionData,
  index,
  setAllUserAnswers,
  allUserAnswers,
  finishedQuiz,
}: {
  handleQuestionSwitch: Function;
  questionData: QuestionT;
  index: number;
  setAllUserAnswers: React.Dispatch<
    React.SetStateAction<stringKeyStringValueT | null>
  >;
  allUserAnswers: stringKeyStringValueT | null;
  finishedQuiz: boolean;
}) {
  const answers = useMemo(
    () =>
      toShuffled([
        ...questionData.incorrect_answers,
        questionData.correct_answer,
      ]),
    [questionData.question]
  );
  const [userAnswer, setUserAnswer] = useState<null | string>(null);
  const [correctAnswer, setCorrectAnswer] = useState<true | false>(false);

  function selectAnswer(answer: string) {
    setUserAnswer(answer);
    setAllUserAnswers((prev) => {
      return { ...prev, [questionData.question]: answer };
    });
  }

  function styleManager(answer: string) {
    // setCorrectAnswer(false);
    if (
      userAnswer == answer ||
      (allUserAnswers != null &&
        !finishedQuiz &&
        allUserAnswers[questionData.question] == answer)
    ) {
      return {
        padding: "10px",
        margin: "5px",
        backgroundColor: "cornflowerblue",
      };
    } else if (
      finishedQuiz &&
      allUserAnswers &&
      questionData.correct_answer == allUserAnswers[questionData.question] &&
      questionData.correct_answer == answer
    ) {
      return {
        padding: "10px",
        margin: "5px",
        backgroundColor: "green",
      };
    } else if (
      finishedQuiz &&
      allUserAnswers &&
      questionData.correct_answer != allUserAnswers[questionData.question] &&
      questionData.correct_answer == answer
    ) {
      // setCorrectAnswer(true);
      return {
        padding: "10px",
        margin: "5px",
        backgroundColor: "green",
      };
    } else if (
      finishedQuiz &&
      allUserAnswers &&
      questionData.correct_answer != allUserAnswers[questionData.question] &&
      allUserAnswers[questionData.question] == answer
    ) {
      return {
        padding: "10px",
        margin: "5px",
        backgroundColor: "red",
      };
    } else {
      return { padding: "10px", margin: "5px" };
    }
  }

  const shuffledAnswersUI = answers.map((answer) => {
    return (
      <button
        disabled={finishedQuiz}
        style={styleManager(answer)}
        key={answer}
        onClick={() => selectAnswer(answer)}
      >
        {answer}
      </button>
    );
  });

  return (
    <div>
      <span>Question number {index + 1}</span>
      {finishedQuiz &&
      allUserAnswers &&
      questionData.correct_answer == allUserAnswers[questionData.question]
        ? "Answer is correct !"
        : "Answer is wrong "}
      <div style={{ border: "1px solid blue", padding: "15px" }}>
        <div>Category: {questionData.category}</div>
        <div>Difficulty: {questionData.difficulty}</div>
        <h2>{questionData.question}</h2>
        {shuffledAnswersUI}
      </div>
      <div
        style={{
          display: "flex",
          width: "200px",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <button onClick={() => handleQuestionSwitch(-1)}>Prev</button>
        <button onClick={() => handleQuestionSwitch(1)}>Next</button>
      </div>
    </div>
  );
}
