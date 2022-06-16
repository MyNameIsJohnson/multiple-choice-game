import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// Types
import { Difficulty, QuestionsState } from "./API";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";

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

  // console.log(questions);

  const [audio] = useState(new Audio("/jeopardy.mp3"));
  const [wrongSound] = useState(new Audio("/wrongSound.m4a"));
  const [correctSound] = useState(new Audio("/correctSound.wav"));

  const startQuiz = async () => {
    // start audio on click
    audio.play();

    // show screen loading on button start
    // setLoading to true
    setLoading(true);
    // need to keep track if game is over, setGameOver to false
    setGameOver(false);
    // declare newQuestions await fetchQuizQuestions
    const newQuestions = await fetchQuizQuestions(
      // TOTAL_QUESTIONS, Difficulty EASY
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      ["book", "music", "film"]
    );

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
    if (!gameOver) {
      // create storage for users answer with event curent target's value
      const answer = e.currentTarget.value;
      // create correct storage, set equal to questions at number of correct answer, i.g. check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // if correct is true setScore to prev arrow function prev +1
      if (correct) {
        setScore((prev) => prev + 1);
        correctSound.play();
      }
      // save answer in the array of answer object and pass in
      if (!correct) {
        wrongSound.play();
      }
      const answerObject = {
        // question: questions at number of question, answer, correct, correctAnswer: questions at number of correct_answer
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      // setUserAnswers to prev arrow function array of ...prev, answerObject
      setUserAnswers((prev) => [...prev, answerObject]);
    }
    audio.pause();
  };

  const nextQuestion = () => {
    // create nextQuestion to equal number + 1
    const nextQuestion = number + 1;
    // if nextQuestion is equal to TOTAL_QUESTIONS, setGameOver to true, else setNumber to nextQuestion
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      audio.pause();
    } else {
      setNumber(nextQuestion);
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <Wrapper className="App">
        <h1>Let's See How Much You Know</h1>
        {/* Conditional rendering */}
        {/* Only show button if gameOver OR userAnswers length is equal to TOTAL_QUESTIONS else render null*/}
        {gameOver || userAnwers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}

        {/* Only show score if not gameOver else render null */}
        {!gameOver ? <p className="score">Score: {score} </p> : null}

        {/* Only show if loading  */}
        {loading && (
          <p className="loadingQuestions">
            <svg
              id="svg-spinner"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <circle cx="24" cy="4" r="4" fill="#fff" />
              <circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2" />
              <circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4" />
              <circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7" />
              <circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9" />
              <circle cx="24" cy="44" r="2.5" fill="#feebbc" />
              <circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af" />
              <circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1" />
              <circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94" />
              <circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86" />
            </svg>
          </p>
        )}

        {/* Only show card if not loading && not gameOVer && */}
        {!loading && !gameOver && (
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
=======
      <Wrapper>
        <h1>React Quiz</h1>

        {gameOver || userAnwers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}

        {!gameOver ? <p className="score">Score: {score}</p> : null}

        {loading && <p className="loadingQuestions">Loading Questions ...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            answers={questions[number].answers}
            callback={checkAnswer}
            category={questions[number].category}
            question={questions[number].question}
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            userAnswer={userAnwers ? userAnwers[number] : undefined}
          />
        )}
>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
        {!gameOver &&
        !loading &&
        userAnwers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
<<<<<<< HEAD
          <>
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          </>
<<<<<<< HEAD
=======
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
=======
>>>>>>> 93323c46881635a0f0921f585e054e113a449801
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
