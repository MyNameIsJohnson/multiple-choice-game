import React from "react";
<<<<<<< HEAD
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'
=======
//  types
import { AnswerObject } from "../App";
// styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
type Props = {
  answers: string[];
  // set callback type
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  category: string;
  question: string;
  questionNumber: number;
  totalQuestions: number;
  // set userAnswer type to AnswerObject and type separator '|' undefined
  userAnswer: AnswerObject | undefined;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  category,
  question,
  questionNumber,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <Wrapper>
<<<<<<< HEAD
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
=======
      <p className="number">Category: {category}</p>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>

>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
<<<<<<< HEAD
           key={answer}
           correct={userAnswer?.correctAnswer === answer}
           userClicked={userAnswer?.answer === answer}>
            <button disabled={userAnswer? true : false} value={answer} onClick={callback}>
=======
            key={answer}
            // use optional chaining of props pass
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
>>>>>>> 5a4cc287be177f2ba35e975e617f5716db351705
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
