import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// Types
import { Difficulty, QuestionsState } from "./API";

// create object to be used in checkAnswer and export to QuestionCard Props for userAnswer
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnwers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startQuiz = async () => {
    // setLoading to true
    // setGameOver to false
    // declare newQuestions await fetchQuizQuestions
    // TOTAL_QUESTIONS, Difficulty EASY
    // setQuestions to newQuestions
    // setScore to 0
    // setUserAnswers to empty array
    // setNumber to 0
    // setLoading to false
  };

  // use question card Props as callback
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if game not over
    // creste storage for users answer with event curent target's value
    // create correct storage, set equal to questions at number of correct answer, i.g. check answer against correct answer
    // if correct is true setScore to prev bang prev +1
    // save answer in the array of answer object and pass in
    // question: questions at number of question, answer, correct, correctAnswer: questions at number of correct_answer
    // setUserAnswers to prev bang array of ...prev, answerObject
  };

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {/* Conditional rendering */}
      {/* Only show button if gameOver OR userAnswers length is equal to TOTAL_QUESTIONS else render null*/}

      <button className="start" onClick={startQuiz}>
        Start
      </button>

      {/* Only show score if not gameOver else render null */}
      <p className="score">Score:</p>

      {/* Only show if loading  */}
      <p className="loadingQuestions">Loading Questions ...</p>

      {/* Only show card if not loading && not gameOVer  */}
      <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnwers ? userAnwers[number] : undefined}
        callback={checkAnswer}
      />

      {/* Only show button if not gameOver && not loading && userAnswers length is equal to number + 1 && number not equal TOTAL_QUESTIONS - 1, else render null */}

      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
