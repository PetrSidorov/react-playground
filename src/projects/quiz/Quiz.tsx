import { useEffect, useMemo, useState } from "react";
import QuestionWrapper from "./QuestionWrapper";
import { decodeEntities } from "./utils";

export default function Quiz() {
  const [questions, setQuestions] = useState<null | QuestionsDataT>();
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [allUserAnswers, setAllUserAnswers] =
    useState<stringKeyStringValueT | null>(null);
  const [finishedQuiz, setFinishedQuiz] = useState<true | false>(false);
  const [init, setInit] = useState<true | false>(false);

  useEffect(() => {
    console.log(allUserAnswers);
  }, [allUserAnswers]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=3")
      .then((response) => response.json())
      .then((data) => {
        if (data.response_code == 0) {
          const decodedQuestions = data.results.map(
            (questionData: QuestionT) => {
              questionData.category = decodeEntities(questionData.category);
              questionData.question = decodeEntities(questionData.question);
              questionData.correct_answer = decodeEntities(
                questionData.correct_answer
              );
              questionData.incorrect_answers =
                questionData.incorrect_answers.map((answer) =>
                  decodeEntities(answer)
                );
              return questionData;
            }
          );
          console.log(decodedQuestions);
          data.results = decodedQuestions;
          setQuestions(data);
          setInit(false);
          setFinishedQuiz(false);
          setActiveQuestion(0);
        }
      });
  }, [init]);

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

  function countScore() {
    setFinishedQuiz(true);
    let score = 0;
    if (questions?.results && allUserAnswers != null) {
      for (let question of questions?.results) {
        if (allUserAnswers[question.question] == question.correct_answer) {
          score++;
        }
      }
    }
    console.log(score);
  }

  function startOver() {
    setFinishedQuiz(false);
    setInit(true);
  }

  return questions?.results.map((q, i, results) => {
    return activeQuestion == i ? (
      <>
        <QuestionWrapper
          key={q.question}
          handleQuestionSwitch={handleQuestionSwitch(results.length)}
          index={i}
          questionData={q}
          setAllUserAnswers={setAllUserAnswers}
          allUserAnswers={allUserAnswers}
          finishedQuiz={finishedQuiz}
        />
        {i == results.length - 1 ? (
          <button onClick={countScore}>Finish quiz</button>
        ) : null}
        {finishedQuiz ? (
          <button onClick={startOver}>Restart quiz</button>
        ) : null}
      </>
    ) : null;
  });
}
