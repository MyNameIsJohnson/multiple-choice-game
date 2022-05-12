import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// Types
import { Difficulty, QuestionsState } from "./API";

// create a type object to be used in checkAnswer and export to QuestionCard Props for userAnswer
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
    // show screen loading on button start
    // setLoading to true
    setLoading(true);
    // need to keep track if game is over, setGameOver to false
    setGameOver(false);
    // declare newQuestions await fetchQuizQuestions
    const newQuestions = await fetchQuizQuestions(
      // TOTAL_QUESTIONS, Difficulty EASY
      TOTAL_QUESTIONS, 
      Difficulty.EASY);

    // setQuestions to newQuestions
    setQuestions(newQuestions);
    // setScore to 0
    setScore(0);
    // setUserAnswers to empty array
    setUserAnswers([]);
    // setNumber to 0
    setNumber(0);
    // setLoading to false
    setLoading(false);
  };

  // use question card Props as callback
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // if game not over
    if ( !gameOver ){
      // create storage for users answer with event curent target's value
      const answer = e.currentTarget.value;
      // create correct storage, set equal to questions at number of correct answer, i.g. check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // if correct is true setScore to prev arrow function prev +1
      if ( correct ) setScore((prev) => prev + 1);
      // save answer in the array of answer object and pass in
      const answerObject = {
        // question: questions at number of question, answer, correct, correctAnswer: questions at number of correct_answer
        question: questions[number].question, 
        answer, 
        correct, 
        correctAnswer: questions[number].correct_answer,
      }
      // setUserAnswers to prev arrow function array of ...prev, answerObject
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // create nextQuestion to equal number + 1
    const nextQuestion = number + 1; 
    // if nextQuestion is equal to TOTAL_QUESTIONS, setGameOver to true, else setNumber to nextQuestion
    if ( nextQuestion === TOTAL_QUESTIONS ){
      setGameOver(true);
    } else {
      setNumber(nextQuestion)
    }
  };

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {/* Conditional rendering */}
      {/* Only show button if gameOver OR userAnswers length is equal to TOTAL_QUESTIONS else render null*/}
      { gameOver || userAnwers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startQuiz}>
          Start
        </button>
      ) : null }

      {/* Only show score if not gameOver else render null */}
      { !gameOver ? <p className="score">Score:</p> : null }
      
      {/* Only show if loading  */}
      { loading && <p className="loadingQuestions">Loading Questions ...</p>}

      {/* Only show card if not loading && not gameOVer && */}
      { !loading && !gameOver && (
        <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnwers ? userAnwers[number] : undefined}
        callback={checkAnswer}
        />
      )}

      {/* Only show button if not gameOver && not loading && userAnswers length is equal to number + 1 && number not equal TOTAL_QUESTIONS - 1, else render null */}
      { !gameOver && 
        !loading && 
        userAnwers.length === number + 1 && 
        number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
};

export default App;
