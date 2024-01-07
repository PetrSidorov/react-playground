import { useMemo, useState } from "react";
import { toShuffled } from "./utils";

export default function QuestionMultiple({
  questionData,
}: {
  questionData: QuestionT;
}) {
  //   const answers = [
  //     ...questionData.incorrect_answers,
  //     questionData.correct_answer,
  //   ];
  const [answer, setAnswer] = useState<null | string>(null);
  const answers = useMemo(
    () =>
      toShuffled([
        ...questionData.incorrect_answers,
        questionData.correct_answer,
      ]),
    [questionData.question]
  );

  function selectAnswer(answer: string) {
    // setAnswer();
  }

  const shuffledAnswersUI = answers.map((answer) => {
    return (
      <div
        style={{ padding: "10px" }}
        key={answer}
        onClick={() => selectAnswer(answer)}
      >
        {answer}
      </div>
    );
  });

  return (
    <div style={{ border: "1px solid blue", padding: "15px" }}>
      <span>{questionData.category}</span>
      <span>{questionData.difficulty}</span>
      <h2>{questionData.question}</h2>
      {shuffledAnswersUI}
    </div>
  );
}
