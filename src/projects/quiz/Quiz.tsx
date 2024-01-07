import { createElement, useEffect, useMemo, useState } from "react";
import QuestionWrapper from "./QuestionWrapper";

export default function Quiz() {
  const [questions, setQuestions] = useState<null | QuestionsDataT>();
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((response) => response.json())
      .then((data) => {
        if (data.response_code == 0) {
          setQuestions(data);
        }
      });
  }, []);

  function handleQuestionSwitch(questionsAmount: number) {
    return function handleQuestionActivation(index: number) {
      setActiveQuestion((curr) => {
        const nextActive = curr + index;
        if (nextActive >= 0 && nextActive < questionsAmount) {
          return nextActive;
        }
        return curr;
      });
    };
  }

  return questions?.results.map((q, i, results) => {
    return activeQuestion == i ? (
      <QuestionWrapper
        key={q.question}
        handleQuestionSwitch={handleQuestionSwitch(results.length)}
        type={q.type}
        index={i}
        questionData={q}
      />
    ) : null;
  });
}
