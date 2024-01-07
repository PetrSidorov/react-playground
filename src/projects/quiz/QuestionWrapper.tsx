import { ReactElement, useMemo, useState } from "react";
import QuestionMultiple from "./QuestionMultiple";
import QuestionBoolean from "./QuestionBoolean";
import { toShuffled } from "./utils";

export default function QuestionWrapper({
  handleQuestionSwitch,
  questionData,
  type,
  index,
}: {
  handleQuestionSwitch: Function;
  questionData: QuestionT;
  type: string;
  index: number;
}) {
  function questionTypeManager(type: string, q: QuestionT) {
    if (type == "multiple") {
      return <QuestionMultiple questionData={q} />;
    } else if (type == "boolean") {
      return <QuestionBoolean questionData={q} />;
    }
  }

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
    <div>
      <span>Question number {index + 1}</span>
      {/* {questionTypeManager(type, questionData)} */}
      <div style={{ border: "1px solid blue", padding: "15px" }}>
        <span>{questionData.category}</span>
        <span>{questionData.difficulty}</span>
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
