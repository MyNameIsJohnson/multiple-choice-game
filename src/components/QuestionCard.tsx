import React from "react";
//  types
import { AnswerObject } from "../App";
// styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

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
      <p className="number">Category: {category}</p>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>

      <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
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
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
